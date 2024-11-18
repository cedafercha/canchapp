import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventComponent } from "../event/event.component";

declare var bootstrap: any;

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule, EventComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {

  @ViewChild('appEvent', { static: true}) appEvent!: EventComponent;
  modalTest: any;

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin,interactionPlugin],
    //initialView: 'timeGridWeek',
    allDaySlot: false,
    dateClick: this.handleDateClick,
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    //locale: 'es',
    titleFormat: {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      meridiem: 'short' // Muestra "a. m." y "p. m."
    }
  };

  ngOnInit(): void {
    this.modalTest = new bootstrap.Modal(document.getElementById('exampleModal'))

    console.log(this.modalTest);
  }

  showModal() {
    this.modalTest.show();
  }

  public handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  public getEvent() {
    this.appEvent.getEvent();
  }

}
