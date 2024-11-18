import { AfterViewInit, Component } from '@angular/core';
import { JqueryService } from '../../service/jquery-service.service';

@Component({
  selector: 'lib-date',
  standalone: true,
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent implements AfterViewInit  {

  private readonly $ = this.jqueryService.useJQuery();

  constructor(private readonly jqueryService: JqueryService) { 

  }
  ngAfterViewInit(): void {
    this.$( "#datepicker" ).datepicker();
  }

}
