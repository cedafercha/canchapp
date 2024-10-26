import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor(private http: HttpClient) {
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJOYW1lIjoiTWFudWVsIiwiRW1haWwiOiJtYW51ZWx6YW1icmFub0BvdXRsb29rLmNvbSIsIlRlbmFudCI6IiIsImV4cCI6MTcyOTc1MDEwOX0.GEEIVIA8m0NS-CCJRLVIEtfIyEeRNaPULyjMD39vOJc");
    console.log("Home OK");
  }

  async getData() {
    var login = {
      Email: 'manuelzambrano@outlook.com',
      Password: '123456'
    };
    var result = await this.http.post('http://localhost:5197/api/Security/Login',login).subscribe(res => {
      console.log(res);  
    });
    //var result = await this.http.get('http://localhost:5197/api/Security/GetAll');
    console.log(result);
  }

}
