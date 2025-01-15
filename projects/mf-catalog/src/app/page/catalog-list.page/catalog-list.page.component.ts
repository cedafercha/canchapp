import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-catalog-list.page',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './catalog-list.page.component.html',
  styleUrl: './catalog-list.page.component.css'
})
export class CatalogListPageComponent {
  
  constructor(public translate: TranslateService) { }

}
