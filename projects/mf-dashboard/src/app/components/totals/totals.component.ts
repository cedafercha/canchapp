import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TotalsService } from '../../services/totals.services';
import { Subscription } from 'rxjs';
import { TotalsDTO } from '../../models/totals.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-totals',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './totals.component.html',
  styleUrl: './totals.component.css'
})
export class TotalsComponent implements OnInit {

  private readonly subscription: Subscription = new Subscription();
  TotalValueBooking: number = 0;
  TotalNumberBooking: number = 0;

  constructor(
      public translate: TranslateService,
      public readonly totalsService: TotalsService ) {
        
  }

  ngOnInit(): void {

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    this.subscription.add(this.totalsService.getTotals(year, month, day).subscribe({
      next: (data: TotalsDTO) => {
        this.TotalValueBooking = data.totalValueBooking;
        this.TotalNumberBooking = data.totalNumberBooking;
      },
      error: (error) => {
        console.error(error);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
