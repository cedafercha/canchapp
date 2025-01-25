import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { DashBoardService } from '../../services/dashboard.service.service';
import { TotalValueResultDTO } from '../../models/totalValueResult.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonsLibService } from 'commons-lib';

@Component({
  selector: 'app-chart-last-month',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './chart-last-month.component.html',
  styleUrl: './chart-last-month.component.css'
})
export class ChartLastMonthComponent implements OnInit {
 
  // Atributo que almacena los datos del chart
  chart!: Chart;

  constructor(
    private readonly dashBoardService: DashBoardService,
    private readonly commonsLibService: CommonsLibService,
    public translate: TranslateService ) {
  }
 
  ngOnInit(): void {

    this.dashBoardService.getTotalValueLast6MonthsQuery().subscribe({
      next: (data: TotalValueResultDTO[]) => {

        let labelsReport: string[] = [];
        let dataReport: number[] = [];

        data.forEach((m) => {
          const numberMonth = this.commonsLibService.getMonthText(m.month - 1);
          m.monthText = this.translate.instant(`Commons.${numberMonth}`);
          labelsReport.push(m.monthText);
          dataReport.push(m.totalValuePerMonth);
        });
        
        const dataConfig = {
          labels: labelsReport,
          datasets: [{
              data: dataReport,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
          };
    
        // Creamos la gráfica
        this.chart = new Chart("chart", {
          type: 'bar' as ChartType, // tipo de la gráfica 
          data: dataConfig, // datos 
          options: {
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: false
              }
            }
          }
        });


      },
      error: err => { 
        console.error('Observable [companyService.update()] emitted an error: ' + err)
      }
    });


    

  }
}
