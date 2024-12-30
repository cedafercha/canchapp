import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiEnum } from 'commons-lib';
import { BookingDTO } from '../models/booking.model';
import { EventCalendarDTO } from '../models/eventCalendar.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl: string = ApiEnum.Booking;

  constructor(private readonly http: HttpClient) {
  }

  create(booking: BookingDTO): Observable<BookingDTO> {
      return this.http.post<BookingDTO>(`${this.apiUrl}Create`, booking);
  }

  getEvents(idCourt: number): Observable<EventCalendarDTO[]> {
    return this.http.get<EventCalendarDTO[]>(`${this.apiUrl}GetEvents/${idCourt}`);
  }  

  update(booking: BookingDTO): Observable<BookingDTO> {
    return this.http.put<BookingDTO>(`${this.apiUrl}Update`, booking);
  }

  delete(idBooking: number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}Delete/${idBooking}`);
  }

  updatePay(booking: BookingDTO): Observable<number> {
    return this.http.put<number>(`${this.apiUrl}UpdatePay`, booking);
  }

}
