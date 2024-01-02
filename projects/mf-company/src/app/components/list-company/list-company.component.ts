import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'list-company',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './list-company.component.html',
  styleUrl: './list-company.component.css'
})
export class ListCompanyComponent {

  constructor(public translate: TranslateService) {
    console.log("********************",translate.currentLoader);
  }

}
