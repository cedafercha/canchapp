import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {

  constructor() { }

  getFormatIsoDate(date: Date | string, time: string): string {

    let _date = new Date(date);
    const year = _date.getFullYear();
    const month = String(_date.getMonth() + 1).padStart(2, '0');
    const day = String(_date.getDate()).padStart(2, '0');
    const hours = time.split(':')[0];
    const minutes = time.split(':')[1];
    const localISOString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
    return localISOString;
  }
}
