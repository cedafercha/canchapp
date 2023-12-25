import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company.page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company.page.component.html',
  styleUrl: './company.page.component.css'
})
export class CompanyPageComponent {

  constructor() {
    console.log('page company');
  }

}
