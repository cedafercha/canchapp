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

declare var bootstrap: any;

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [TranslateModule, FullCalendarModule, EventComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {

  private readonly subscription: Subscription = new Subscription();
  @ViewChild('appEvent', { static: true}) appEvent!: EventComponent;
  modalTest: any;
  dateTimeStart: Date = new Date();
  dateTimeEnd: Date = new Date();

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek', // vista semanal con horas
    allDaySlot: false,
    selectable: true,
    selectMirror: true,
    select: (info) => {
      this.handleSelect(info);
    },
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }
  };

  constructor(
    public translate: TranslateService,
    private readonly bookingService: BookingService) {

  }

  ngOnInit(): void {
    this.modalTest = new bootstrap.Modal(document.getElementById('exampleModal'));
  }

  handleSelect(info: any) {
    console.log('Rango seleccionado:', info.start, info.end);
    this.dateTimeStart = info.start;
    this.dateTimeEnd = info.end;
    this.modalTest.show();
  }

  public saveEvent() {
    const eventTmp: EventDTO | null = this.appEvent.getEvent();
    if(eventTmp) {
      let bookingTmp = new BookingDTO();
      bookingTmp.DateTimeStart = eventTmp.dateTimeStart;
      bookingTmp.DateTimeEnd = eventTmp.dateTimeEnd;
      bookingTmp.IdCustomer = eventTmp.customer?.id;
      bookingTmp.IdCourt = eventTmp.court?.id      
      bookingTmp.IsRecurrent = eventTmp.isRecurrent;
      bookingTmp.Observation = eventTmp.observation;

      this.subscription.add(this.bookingService.create(bookingTmp).subscribe( res => {
        console.log(res);
      }));
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
