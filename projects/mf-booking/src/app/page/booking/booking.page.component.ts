import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './booking.page.component.html',
  styleUrl: './booking.page.component.css'
})
export class BookingPageComponent {

}
