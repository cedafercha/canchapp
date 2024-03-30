import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataComponent } from "../../components/profile-data/profile-data.component";

@Component({
    selector: 'app-profile.page',
    standalone: true,
    templateUrl: './profile.page.component.html',
    styleUrl: './profile.page.component.css',
    imports: [CommonModule, ProfileDataComponent]
})
export class ProfilePageComponent {

}