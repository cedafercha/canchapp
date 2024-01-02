import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDataComponent } from '../../components/company-data/company-data.component';

@Component({
  selector: 'app-company.page',
  standalone: true,
  imports: [CommonModule, CompanyDataComponent],
  templateUrl: './company.page.component.html',
  styleUrl: './company.page.component.css'
})
export class CompanyPageComponent {

  constructor() {
    console.log('page company');
  }

}
