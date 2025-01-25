import { Component } from '@angular/core';
import { TotalsComponent } from "../../components/totals/totals.component";
import { ChartLastMonthComponent } from "../../components/chart-last-month/chart-last-month.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-metrics.page',
  standalone: true,
  imports: [TotalsComponent, ChartLastMonthComponent,TranslateModule],
  templateUrl: './metrics.page.component.html',
  styleUrl: './metrics.page.component.css'
})
export class MetricsPageComponent {
  constructor(
    public translate: TranslateService
  ) {}

}
