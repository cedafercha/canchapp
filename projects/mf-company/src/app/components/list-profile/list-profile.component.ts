import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Profile } from '../../models/profile.interface';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'list-profile',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './list-profile.component.html',
  styleUrl: './list-profile.component.css'
})
export class ListProfileComponent {

  listProfile: Profile[] = [];

  constructor(
    public translate: TranslateService, 
    private profileService: ProfileService,
    private router: Router ) {
    this.profileService.findAll().subscribe(res => {this.listProfile = res;});
  }

  create(): void {
    this.router.navigate(['/profile']);
  }

}
