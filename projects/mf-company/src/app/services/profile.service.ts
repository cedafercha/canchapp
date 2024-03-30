import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {  

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTc4OTY4NDE5ZjAyZjFkYzJiM2I2ZTciLCJ1c2VyTmFtZSI6ImNlc2FyY2hhcnJpMDhAZ21haWwuY29tIiwiY29tcGFuaWVzIjpbIjY1NzQxNWQ1YmJkNTZjNjcyNTBhZWRjMyIsIjY1NzRiNzdiMzQ4NjI3ZTBmZjZhNGFlNSJdLCJpc1Byb3Zpc2lvbmFsIjpmYWxzZSwiaXNBZG1pbiI6dHJ1ZSwiY3VycmVudENvbXBhbnkiOiI2NTc0MTVkNWJiZDU2YzY3MjUwYWVkYzMiLCJpYXQiOjE3MTE1OTQ0NzQsImV4cCI6MTcxMjE5OTI3NH0.0PgzXsQ2roR6VNBnipfj_s-FY0GYBLp3RWFeUUjYUa0'
  });

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Profile[]> {
    const options = { headers: this.headers };
    return this.http.get<Profile[]>('http://localhost:3000/api/v1/profile/findAll', options );
  }

  find(profileId: string): Observable<Profile> {
    const options = { headers: this.headers };
    return this.http.get<Profile>(`http://localhost:3000/api/v1/profile/find/${profileId}`, options );
  }

  create(profile: Profile): Observable<Profile> {
    const options = { headers: this.headers };
    return this.http.post<Profile>(`http://localhost:3000/api/v1/profile/create`, profile, options );
  }

  update(profile: Profile): Observable<Profile> {
    const options = { headers: this.headers };
    return this.http.post<Profile>(`http://localhost:3000/api/v1/profile/update`, profile, options );
  }
}
