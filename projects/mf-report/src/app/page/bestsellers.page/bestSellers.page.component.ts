import { Component } from '@angular/core';
import { ReportBestSellersComponent } from '../../components/report-best-sellers/report-best-sellers.component';

@Component({
  selector: 'app-bestsellers.page',
  standalone: true,
  imports: [ReportBestSellersComponent],
  templateUrl: './bestSellers.page.component.html',
  styleUrl: './bestSellers.page.component.css'
})
export class BestSellersPageComponent {

}
