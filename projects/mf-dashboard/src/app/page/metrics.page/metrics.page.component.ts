import { Component } from '@angular/core';
import { TotalsComponent } from "../../components/totals/totals.component";

@Component({
  selector: 'app-metrics.page',
  standalone: true,
  imports: [TotalsComponent],
  templateUrl: './metrics.page.component.html',
  styleUrl: './metrics.page.component.css'
})
export class MetricsPageComponent {

}
