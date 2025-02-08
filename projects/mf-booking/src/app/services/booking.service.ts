import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiEnum } from 'commons-lib';
import { BookingDTO } from '../models/booking.model';
import { EventCalendarDTO } from '../models/eventCalendar.interface';
import { ValueCourtDTO } from '../models/valueCourt.interface';
import { CustomerQuickDTO } from '../models/customerQuick.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl: string = ApiEnum.Booking;
  apiUrlCustomer: string = ApiEnum.Customer;

  constructor(private readonly http: HttpClient) {
  }

  create(booking: BookingDTO): Observable<BookingDTO> {
      return this.http.post<BookingDTO>(`${this.apiUrl}Create`, booking);
  }

  createCustomer(customer: CustomerQuickDTO): Observable<CustomerQuickDTO> {
    return this.http.post<CustomerQuickDTO>(`${this.apiUrlCustomer}QuickCreate`, customer);
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

  getCourtValue(day: number, timeStart: string, timeEnd: string, idCourt: number,): Observable<ValueCourtDTO> {
    return this.http.get<ValueCourtDTO>(`${this.apiUrl}GetCourtValue/${day}/${timeStart}/${timeEnd}/${idCourt}`);
  }

}
