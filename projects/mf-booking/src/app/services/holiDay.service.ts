import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiEnum } from "commons-lib";
import { HoliDayDTO } from "../models/holiDay.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HoliDayService {

    apiUrl: string = ApiEnum.HoliDay;

    constructor(private readonly http: HttpClient) {
    }

    getHoliDays(year: number): Observable<HoliDayDTO[]> {
    return this.http.get<HoliDayDTO[]>(`${this.apiUrl}GetHoliDayByYear/${year}`);
    }

}
