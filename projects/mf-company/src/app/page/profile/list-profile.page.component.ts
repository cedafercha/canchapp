import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ListProfileComponent } from '../../components/list-profile/list-profile.component';

@Component({
  selector: 'app-list-profile.page',
  standalone: true,
  imports: [CommonModule, ListProfileComponent],
  templateUrl: './list-profile.page.component.html',
  styleUrl: './list-profile.page.component.css'
})
export class ListProfilePageComponent {

  constructor(public translate: TranslateService) {
    
  }

}
