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

//   findAll(): Observable<Profile[]> {
//     const options = { headers: this.headers };
//     return this.http.get<Profile[]>('http://localhost:3000/api/v1/profile/findAll', options );
//   }

//   find(profileId: string): Observable<Profile> {
//     const options = { headers: this.headers };
//     return this.http.get<Profile>(`http://localhost:3000/api/v1/profile/find/${profileId}`, options );
//   }

create(booking: BookingDTO): Observable<BookingDTO> {
    return this.http.post<BookingDTO>(`${this.apiUrl}Create`, booking);
}

getEvents(): Observable<EventCalendarDTO[]> {
  return this.http.get<EventCalendarDTO[]>(`${this.apiUrl}GetEvents`);
}  

//   update(profile: Profile): Observable<Profile> {
//     const options = { headers: this.headers };
//     return this.http.post<Profile>(`http://localhost:3000/api/v1/profile/update`, profile, options );
//   }
}
