import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor(private readonly http: HttpClient) {
    localStorage.setItem("TKCANCHAPP","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJOYW1lIjoiTWFudWVsIiwiRW1haWwiOiJtYW51ZWx6YW1icmFub0BvdXRsb29rLmNvbSIsIlRlbmFudCI6IiIsImV4cCI6MTczMDA5Mzk1M30.Hy0SBgVcGc7K0vq9OfMaCUZHotnpQF6pMt90kYBwj1Y");
    console.log("Home OK");
  }

  async getData() {
    let login = {
      Email: 'manuelzambrano@outlook.com',
      Password: '123456'
    };
    this.http.post('http://localhost:5197/api/Security/Login', login).subscribe(res => {
      console.log(res);
    });
  }

  async getData2() {
    this.http.get('http://localhost:5197/api/Security/GetAll').subscribe(res => {
      console.log(res);
    });
  }

}
