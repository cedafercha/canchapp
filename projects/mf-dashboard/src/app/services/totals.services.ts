import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiEnum } from "commons-lib";
import { Observable } from "rxjs";
import { TotalsDTO } from "../models/totals.interface";

@Injectable({
  providedIn: 'root'
})
export class TotalsService {

    apiUrl: string = ApiEnum.Booking;

    constructor(private readonly http: HttpClient) {
    }

    getTotals(year:number, month: number, day: number): Observable<TotalsDTO> {
        return this.http.get<TotalsDTO>(`${this.apiUrl}GetTotals/${year}/${month}/${day}`);
    }

}
