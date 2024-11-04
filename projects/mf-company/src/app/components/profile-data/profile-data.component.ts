import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Profile, Module, Action } from '../../models/profile.interface';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'profile-data',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './profile-data.component.html',
  styleUrl: './profile-data.component.css'
})
export class ProfileDataComponent {

  profile: Profile[] = [];
  listModules: Module[] = [];
  action = Action;

  constructor(
    public translate: TranslateService,
    private profileService: ProfileService) {
      this.profileService.find('65c9658adb455180fb08bb40').subscribe(res => {this.listModules = res.modules;});
    }

  save() {}

}
