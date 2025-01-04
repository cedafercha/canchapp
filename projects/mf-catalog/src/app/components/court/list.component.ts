import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CourtDTO } from '../../models/court.model';
import { Subscription } from 'rxjs';
import { CourtService } from '../../services/court.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-court-list',
  standalone: true,
  imports: [TranslateModule, CommonModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class CourtListComponent implements OnInit {

  private readonly subscription: Subscription = new Subscription();
  courts: CourtDTO[] | undefined;

  constructor(
    public translate: TranslateService,
    private readonly courtService: CourtService) { }

  ngOnInit(): void {
    this.loadCourts();
  }

  loadCourts(): void {
    this.subscription.add(
      this.courtService.getCourts().subscribe((courts: CourtDTO[]) => {
        this.courts = [];
        this.courts = courts;
    }));
  }

}
