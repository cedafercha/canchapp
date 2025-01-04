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

    getCourts(): Observable<CourtDTO[]> {
        return this.http.get<CourtDTO[]>(`${this.apiUrl}GetCourt`);
    }

}
