import { Component } from '@angular/core';
import { CourtListComponent } from "../../components/court/list.component";

@Component({
  selector: 'app-court-list.page',
  standalone: true,
  imports: [CourtListComponent],
  templateUrl: './court-list.page.component.html',
  styleUrl: './court-list.page.component.css'
})
export class CourtListPageComponent {

}
