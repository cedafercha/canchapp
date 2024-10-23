import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-court.page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './list-court.page.component.html',
  styleUrl: './list-court.page.component.css'
})
export class ListCourtPageComponent {

  constructor(
    public translate: TranslateService,) {
}

}
