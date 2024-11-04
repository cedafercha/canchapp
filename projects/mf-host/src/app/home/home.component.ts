import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor(private readonly http: HttpClient) {
    
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
