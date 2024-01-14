import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {  

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Company[]> {    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer isAdmin'
    });
    const options = { headers: headers };
    return this.http.get<Company[]>('http://localhost:3000/api/v1/company/findAll', options );
  }

  find(companyId: string): Observable<Company> {    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer isAdmin'
    });
    const options = { headers: headers };
    return this.http.get<Company>(`http://localhost:3000/api/v1/company/find/${companyId}`, options );
  }

  create(company: Company): Observable<Company> {    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer isAdmin'
    });
    const options = { headers: headers };
    return this.http.post<Company>(`http://localhost:3000/api/v1/company/create`, company, options );
  }

  update(company: Company): Observable<Company> {    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer isAdmin'
    });
    const options = { headers: headers };
    return this.http.post<Company>(`http://localhost:3000/api/v1/company/update`, company, options );
  }
}
