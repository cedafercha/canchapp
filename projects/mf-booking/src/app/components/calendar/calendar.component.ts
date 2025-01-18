import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
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
import { EventImpl } from '@fullcalendar/core/internal';

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
  @ViewChild('eventConfirmModal', { static: true}) modalConfirmElement!: ElementRef;
  @ViewChild('calendar') calendar!: FullCalendarComponent;

  private readonly subscription: Subscription = new Subscription();
  eventModal: any;
  eventConfirmModal: any;
  dateTimeStart?: string;
  dateTimeEnd?: string;
  titleModal: string;
  selectId: SelectIdEnum;
  initialLocaleCode = 'es';
  disabledDays: string[] = [];
  actionState: ActionEnum = ActionEnum.None;
  courtNameSelected: string = '';
  courtIdSelected: number = -1;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
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
    this.eventConfirmModal = new bootstrap.Modal(this.modalConfirmElement.nativeElement);

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
          id: event.idBooking.toString(),
          title: event.nameCustomer,
          start: event.dateTimeStart,
          end: event.dateTimeEnd,
          backgroundColor: event.color,
          borderColor: event.color, 
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
    if(target.value == '-1')
      return;
    
    this.courtIdSelected = target.value as number;
    this.courtNameSelected = target.selectedOptions[0].text;
    this.loadEvents(this.courtIdSelected);
  }

  handleSelectAllow(info: any): boolean {
    const dateTmp = `${info.start.getFullYear()}-${info.start.getMonth()+1}-${info.start.getDate()}`;
    const res = !this.disabledDays.includes(dateTmp);
    return res;
  }

  handleSelect(info: any) {
    if(this.courtIdSelected == -1)
      return;

    this.titleModal = this.translate.instant("Booking.TitleModalNew");
    this.actionState = ActionEnum.Create;
    let eventNew: EventDTO = new EventDTO();
    eventNew.dateTimeStart = info.startStr;
    eventNew.dateTimeEnd = info.endStr;
    eventNew.day = info.start.getDay();
    eventNew.court = new CourtDTO();
    eventNew.court.id = this.courtIdSelected;    
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
    let eventEdit = this.getEvent(info.event.id);
    
    if(eventEdit) {
      eventEdit.dateTimeStartNew = info.event.startStr;
      eventEdit.dateTimeEndNew = info.event.endStr;
      this.showEventmodal(eventEdit);
    }
  }

  handleEventClick(info: any) {
    this.titleModal = this.translate.instant("Booking.TitleModalDetail");
    this.actionState = ActionEnum.Detail;
    const eventDetail = this.getEvent(info.event.id);

    if(eventDetail)
      this.showEventmodal(eventDetail);
  }

  handleDatesSet(info: any) {
    const startDate = info.start; // Fecha de inicio del rango visible
    const year = startDate.getFullYear(); // Año de la fecha visible
    this.loadHoliDay(year);
  }

  getEvent(id: string): EventDTO | null {
    let eventTmp: EventImpl | null = this.calendar.getApi().getEventById(id);

    if(eventTmp) {
      let eventDetail: EventDTO = new EventDTO();
      eventDetail.idBooking = eventTmp.extendedProps['idBooking'];    
      eventDetail.dateTimeStart = eventTmp.extendedProps['dateTimeStart'];
      eventDetail.dateTimeEnd = eventTmp.extendedProps['dateTimeEnd'];      
      eventDetail.paymentStatus = eventTmp.extendedProps['paymentStatus'];
      eventDetail.paymentType = eventTmp.extendedProps['paymentType'];
      eventDetail.observation = eventTmp.extendedProps['observation']
      eventDetail.customer = new CustomerDTO();
      eventDetail.customer.id = eventTmp.extendedProps['idCustomer'];
      eventDetail.customer.text = eventTmp.extendedProps['nameCustomer'];
      eventDetail.court = new CourtDTO();
      eventDetail.court.id = eventTmp.extendedProps['idCourt'];
      eventDetail.court.text = eventTmp.extendedProps['nameCourt'];
      return eventDetail;
    }

    return null;
  }

  showEventmodal(event: EventDTO) {
    this.eventComponent.loadEvent(event);
    this.eventModal.show();
  }

  showEventConfirmModal() {
    this.eventModal.hide();
    this.eventConfirmModal.show();
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
      booking.paymentType = eventTmp.paymentType;
      booking.price = eventTmp.price;
      return booking;
    }
    return null;
  }

  public saveEvent(): void {
    const booking: BookingDTO | null = this.getBooking();    

    if(booking) {

      if(booking.price <= 0) {
        this.notificationService.ErrorNotification(this.translate.instant("Error.PriceMustBeGreaterThanZero"));
        return;
      }

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
              case CodeErrorEnum.BookingDateStartMustBeGreater:
                this.notificationService.ErrorNotification(this.translate.instant("Error.BookingDateStartMustBeGreater"));
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
    if(booking!.idBooking) {
      this.subscription.add(this.bookingService.delete(booking!.idBooking).subscribe({
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
