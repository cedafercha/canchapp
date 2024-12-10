import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';

import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { EventComponent } from "../event/event.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EventDTO } from '../../models/event.model';
import { BookingDTO } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';
import { Subscription } from 'rxjs';
import { CodeErrorEnum, NotificationService, SelectComponent, SelectIdEnum } from 'commons-lib';
import { HoliDayService } from '../../services/holiDay.service';
import { HoliDayDTO } from '../../models/holiDay.interface';

declare let bootstrap: any;

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [TranslateModule, FullCalendarModule, EventComponent, SelectComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {

  private readonly subscription: Subscription = new Subscription();
  @ViewChild('appEvent', { static: true}) appEvent!: EventComponent;
  eventModal: any;
  dateTimeStart?: string;
  dateTimeEnd?: string;
  titleModal: string;
  selectId: SelectIdEnum;
  initialLocaleCode = 'es';
  disabledDays: string[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek', // vista semanal con horas
    locale: this.initialLocaleCode,
    allDaySlot: false,
    selectable: true,
    selectMirror: true,
    select: (info) => {
      this.handleSelect(info);
    },
    eventClick: (info) => {
      this.handleEventClick(info);
    },
    selectAllow: (info) => {
      return this.handleSelectAllow(info);
    },
    datesSet: (info) => {
      return this.handleDatesSet(info);
    },
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    slotLabelFormat: [
      { hour12: true, hour: "numeric", minute: "2-digit" }
    ],
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día'
    },
    dayHeaderFormat: { weekday: 'long', day: 'numeric' }
  };

  constructor(
    public translate: TranslateService,
    private readonly bookingService: BookingService,
    private readonly holiDayService: HoliDayService,
    private readonly notificationService: NotificationService) {
      this.titleModal = '';
      this.selectId = SelectIdEnum.ListCourt;
  }

  ngOnInit(): void {
    this.eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    this.loadEvents(-1);
  }

  loadEvents(idCourt: number): void {
    this.subscription.add(
      this.bookingService.getEvents(idCourt).subscribe((events) => {
        this.disabledDays = [];
        this.calendarOptions.events = events.map(event => ({
        title: event.nameCustomer,
        start: event.dateTimeStart,
        end: event.dateTimeEnd,
        extendedProps: event
        }));
    }));
  }

  handleDatesSet(arg: any) {
    const startDate = arg.start; // Fecha de inicio del rango visible
    const year = startDate.getFullYear(); // Año de la fecha visible
    this.loadHoliDay(year);
  }

  loadHoliDay(year: number): void {
    this.subscription.add(
      this.holiDayService.getHoliDays(year).subscribe((days) => {
        this.disabledDays = [];
        this.disabledDays = days.map( dayTmp  => {
          let date = new Date(dayTmp.day);
          return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        });
    }));
  }

  onChangeCourt({ target }: any) {
    this.loadEvents(target.value as number);
  }

  handleSelectAllow(info: any): boolean {
    const dateTmp = `${info.start.getFullYear()}-${info.start.getMonth()+1}-${info.start.getDate()}`;
    const res = !this.disabledDays.includes(dateTmp);
    return res;
  }

  handleSelect(info: any) {
    this.titleModal = this.translate.instant("Booking.TitleModalNew");
    this.dateTimeStart = info.startStr;
    this.dateTimeEnd = info.endStr;
    this.eventModal.show();
  }

  handleEventClick(info: any) {
    this.titleModal = this.translate.instant("Booking.TitleModalEdit");
    this.eventModal.show();
  }

  public saveEvent() {
    const eventTmp: EventDTO | null = this.appEvent.getEvent();
    if(eventTmp) {
      let bookingTmp = new BookingDTO();
      bookingTmp.DateTimeStart = eventTmp.dateTimeStart;
      bookingTmp.DateTimeEnd = eventTmp.dateTimeEnd;
      bookingTmp.IdCustomer = eventTmp.customer?.id;
      bookingTmp.IdCourt = eventTmp.court.id      
      bookingTmp.IsRecurrent = eventTmp.isRecurrent;
      bookingTmp.Observation = eventTmp.observation;

      this.subscription.add(this.bookingService.create(bookingTmp).subscribe({
        next: (data) => {
          this.notificationService.SuccesNotification(this.translate.instant("Booking.BookingCreated"));
          this.loadEvents(data.IdCourt);
          this.eventModal.hide();
        },
        error: (error) => {
          // Manejo de errores con switch según el código del backend
          if (error.error?.code) {
            switch (error.error.code) {
              case CodeErrorEnum.BookingNotAvailable:
                this.notificationService.ErrorNotification(this.translate.instant("Error.BookingNotAvailable"));
                break;
              case CodeErrorEnum.NotCredit:
                console.error('Usuario no encontrado.');
                break;
  
              default:
                console.error('Error no manejado:', error.error.code);
            }
          } else {
            console.error('Error sin código específico:', error.message);
          }
        }
      }));
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
