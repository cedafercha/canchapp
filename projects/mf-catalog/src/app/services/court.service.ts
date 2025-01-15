import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiEnum } from "commons-lib";
import { Observable } from "rxjs";
import { CourtDTO } from "../models/court.model";

@Injectable({
  providedIn: 'root'
})
export class CourtService {

    apiUrl: string = ApiEnum.Court;

    constructor(private readonly http: HttpClient) {
    }

    getCourtlist(): Observable<CourtDTO[]> {
        return this.http.get<CourtDTO[]>(`${this.apiUrl}GetCourtList`);
    }

    upsert(court: CourtDTO): Observable<number> {
        return this.http.post<number>(`${this.apiUrl}Upsert`, court);
    }

    getCourtAndRates(idCourt: number): Observable<CourtDTO> {
        return this.http.get<CourtDTO>(`${this.apiUrl}GetCourtAndRates/${idCourt}`);
    }

    delete(idCourt: number): Observable<number> {
        return this.http.delete<number>(`${this.apiUrl}Delete/${idCourt}`);
    }

}
