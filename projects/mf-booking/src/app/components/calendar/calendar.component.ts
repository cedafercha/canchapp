import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { ActionEnum, CodeErrorEnum, NotificationService, SelectComponent, SelectIdEnum } from 'commons-lib';
import { HoliDayService } from '../../services/holiDay.service';
import { CustomerDTO } from '../../models/customer.model';
import { CourtDTO } from '../../models/court.model';
import { CommonModule } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [TranslateModule, FullCalendarModule, EventComponent, SelectComponent, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit, AfterViewInit  {

  @ViewChild('appEvent', { static: true}) eventComponent!: EventComponent;
  @ViewChild('eventModal', { static: true}) modalElement!: ElementRef;

  private readonly subscription: Subscription = new Subscription();  
  eventModal: any;
  dateTimeStart?: string;
  dateTimeEnd?: string;
  titleModal: string;
  selectId: SelectIdEnum;
  initialLocaleCode = 'es';
  disabledDays: string[] = [];
  actionState: ActionEnum = ActionEnum.None;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek', // vista semanal con horas
    locale: this.initialLocaleCode,
    allDaySlot: false,
    selectable: true,
    selectMirror: true,
    editable: true,
    select: (info) => {
      this.handleSelect(info);
    },
    selectAllow: (info) => {
      return this.handleSelectAllow(info);
    },
    datesSet: (info) => {
      return this.handleDatesSet(info);
    },
    eventDrop: (info) => {
      return this.handleEventDrop(info);
    },
    eventClick: (info) => {
      return this.handleEventClick(info);
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
    this.loadEvents(-1);    
  }

  ngAfterViewInit(): void {
    this.eventModal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modalElement.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.actionState = ActionEnum.None;
      this.loadEvents(-1);
    });
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

  loadHoliDay(year: number): void {
    this.subscription.add(
      this.holiDayService.getHoliDays(year).subscribe((days) => {
        this.disabledDays = [];
        this.disabledDays = days.map( dayTmp  => {
          const date = new Date(dayTmp.day);
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
    this.actionState = ActionEnum.Create;
    let eventNew: EventDTO = new EventDTO();
    eventNew.dateTimeStart = info.startStr;
    eventNew.dateTimeEnd = info.endStr;
    this.showEventmodal(eventNew);
  }

  handleEventDrop(info: any) {
    const isValid = this.handleSelectAllow({start: info.event.start});
    if(!isValid) {
      info.revert();
      return
    }
    this.titleModal = this.translate.instant("Booking.TitleModalEdit");
    this.actionState = ActionEnum.Edit;
    let eventEdit: EventDTO = new EventDTO();
    eventEdit.dateTimeStartNew = info.event.startStr;
    eventEdit.dateTimeEndNew = info.event.endStr;
    eventEdit.idBooking = info.oldEvent.extendedProps.idBooking;    
    eventEdit.dateTimeStart = info.oldEvent.extendedProps.dateTimeStart;
    eventEdit.dateTimeEnd = info.oldEvent.extendedProps.dateTimeEnd;
    eventEdit.paymentStatus = info.oldEvent.extendedProps.paymentStatus;
    eventEdit.paymentType = info.oldEvent.extendedProps.paymentType;
    eventEdit.customer = new CustomerDTO();
    eventEdit.customer.id = info.oldEvent.extendedProps.idCustomer;
    eventEdit.customer.text = info.oldEvent.extendedProps.nameCustomer;
    eventEdit.court = new CourtDTO();
    eventEdit.court.id = info.oldEvent.extendedProps.idCourt;
    eventEdit.court.text = info.oldEvent.extendedProps.nameCourt;
    eventEdit.observation = info.oldEvent.extendedProps.observation;    

    this.showEventmodal(eventEdit);
  }

  handleEventClick(info: any) {
    this.titleModal = this.translate.instant("Booking.TitleModalDetail");
    this.actionState = ActionEnum.Delete;
    let eventDetail: EventDTO = new EventDTO();
    eventDetail.dateTimeStart = info.event.startStr;
    eventDetail.dateTimeEnd = info.event.endStr;
    eventDetail.idBooking = info.event.extendedProps.idBooking;    
    eventDetail.dateTimeStart = info.event.extendedProps.dateTimeStart;
    eventDetail.dateTimeEnd = info.event.extendedProps.dateTimeEnd;
    eventDetail.paymentStatus = info.event.extendedProps.paymentStatus;
    eventDetail.paymentType = info.event.extendedProps.paymentType;
    eventDetail.customer = new CustomerDTO();
    eventDetail.customer.id = info.event.extendedProps.idCustomer;
    eventDetail.customer.text = info.event.extendedProps.nameCustomer;
    eventDetail.court = new CourtDTO();
    eventDetail.court.id = info.event.extendedProps.idCourt;
    eventDetail.court.text = info.event.extendedProps.nameCourt;
    eventDetail.observation = info.event.extendedProps.observation
    
    this.showEventmodal(eventDetail);
  }

  handleDatesSet(info: any) {
    const startDate = info.start; // Fecha de inicio del rango visible
    const year = startDate.getFullYear(); // Año de la fecha visible
    this.loadHoliDay(year);
  }

  showEventmodal(event: EventDTO) {
    this.eventComponent.loadEvent(event);
    this.eventModal.show();
  }

  getBooking(): BookingDTO | null {
    const eventTmp: EventDTO | null = this.eventComponent.getEvent();
    if(eventTmp) {
      let booking = new BookingDTO();
      booking.idBooking = eventTmp.idBooking;
      booking.dateTimeStart = eventTmp.dateTimeStart;
      booking.dateTimeEnd = eventTmp.dateTimeEnd;
      booking.idCustomer = eventTmp.customer?.id;
      booking.idCourt = eventTmp.court.id      
      booking.isRecurrent = eventTmp.isRecurrent;
      booking.observation = eventTmp.observation;
      return booking;
    }
    return null;
  }

  public saveEvent() {
    const booking: BookingDTO | null = this.getBooking();
    if(booking) {
      this.subscription.add(this.bookingService.create(booking).subscribe({
        next: (data) => {
          this.notificationService.SuccesNotification(this.translate.instant("Booking.BookingCreated"));
          this.actionState = ActionEnum.None;
          this.loadEvents(-1);
          this.eventModal.hide();
        },
        error: (error) => {
          // Manejo de errores con switch según el código del backend
          if (error.error?.code) {
            switch (error.error.code) {
              case CodeErrorEnum.BookingNotAvailable:
                this.notificationService.ErrorNotification(this.translate.instant("Error.BookingNotAvailable"));
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

  public updateEvent(): void {
    const booking: BookingDTO | null = this.getBooking();
    if(booking) {
      this.subscription.add(this.bookingService.update(booking).subscribe({
        next: (data) => {
          this.notificationService.SuccesNotification(this.translate.instant("Booking.BookingCreated"));
          this.actionState = ActionEnum.None;
          this.loadEvents(-1);
          this.eventModal.hide();
        },
        error: (error) => {
          // Manejo de errores con switch según el código del backend
          if (error.error?.code) {
            switch (error.error.code) {
              case CodeErrorEnum.BookingNotAvailable:
                this.notificationService.ErrorNotification(this.translate.instant("Error.BookingNotAvailable"));
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

  deleteEvent(): void {
    const booking: BookingDTO | null = this.getBooking();
    if(booking!.idBooking!) {
      this.subscription.add(this.bookingService.delete(booking!.idBooking!).subscribe({
        next: (data) => {
          this.notificationService.SuccesNotification(this.translate.instant("Booking.BookingCreated"));
          this.actionState = ActionEnum.None;
          this.loadEvents(-1);
          this.eventModal.hide();
        },
        error: (error) => {
          // Manejo de errores con switch según el código del backend
          if (error.error?.code) {
            switch (error.error.code) {
              case CodeErrorEnum.BookingNotAvailable:
                this.notificationService.ErrorNotification(this.translate.instant("Error.BookingNotAvailable"));
                break;
              case CodeErrorEnum.BookingNotFound:
                this.notificationService.ErrorNotification(this.translate.instant("Error.BookingNotFound"));
                break;
              case CodeErrorEnum.BookingPaid:
                this.notificationService.ErrorNotification(this.translate.instant("Error.BookingPaid"));
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
