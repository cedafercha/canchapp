import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'list-company',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './list-company.component.html',
  styleUrl: './list-company.component.css'
})
export class ListCompanyComponent {

  constructor(public translate: TranslateService) {
  }

}
