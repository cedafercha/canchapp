import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'list-company',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './list-company.component.html',
  styleUrl: './list-company.component.css'
})
export class ListCompanyComponent {

  listCompany: Company[] = [];

  constructor(
      public translate: TranslateService, 
      private companyService: CompanyService,
      private router: Router ) {
    this.companyService.findAll().subscribe(res => {this.listCompany = res;});
  }

  create(): void {
    this.router.navigate(['/company']);
  }

}
