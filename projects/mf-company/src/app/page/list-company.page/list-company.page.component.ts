import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ListCompanyComponent } from '../../components/list-company/list-company.component';

@Component({
  selector: 'app-list-company.page',
  standalone: true,
  imports: [CommonModule, ListCompanyComponent],
  templateUrl: './list-company.page.component.html',
  styleUrl: './list-company.page.component.css'
})

export class ListCompanyPageComponent {

  constructor(public translate: TranslateService) {
    //translate.setDefaultLang('es');
    //const browserLang = translate.getBrowserLang();
    //translate.use(browserLang ?? 'en');
  }

}
