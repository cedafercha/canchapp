import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnum } from 'commons-lib';
import { TotalValueResultDTO } from '../models/totalValueResult.interface';
import { TotalsDTO } from "../models/totals.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

      apiUrl: string = ApiEnum.DashBoard;
  
      constructor(private readonly http: HttpClient) {
      }

      getTotals(year:number, month: number, day: number): Observable<TotalsDTO> {
        return this.http.get<TotalsDTO>(`${this.apiUrl}GetTotals/${year}/${month}/${day}`);
      }
  
      getTotalValueLast6MonthsQuery(): Observable<TotalValueResultDTO[]> {
          return this.http.get<TotalValueResultDTO[]>(`${this.apiUrl}GetTotalValueLast6MonthsQuery`);
      }
}
