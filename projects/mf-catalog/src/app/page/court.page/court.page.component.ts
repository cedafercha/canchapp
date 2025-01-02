import { Component } from '@angular/core';
import { CourtComponent } from "../../components/court/court.component";

@Component({
  selector: 'app-court.page',
  standalone: true,
  imports: [CourtComponent],
  templateUrl: './court.page.component.html',
  styleUrl: './court.page.component.css'
})
export class CourtPageComponent {

}
