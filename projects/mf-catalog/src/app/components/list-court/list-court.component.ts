import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CourtDTO } from '../../models/court.model';
import { Subscription } from 'rxjs';
import { CourtService } from '../../services/court.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CodeErrorEnum, NotificationService } from 'commons-lib';

declare let bootstrap: any;

@Component({
  selector: 'app-court-list',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink],
  templateUrl: './list-court.component.html',
  styleUrl: './list-court.component.css'
})
export class CourtListComponent implements OnInit, AfterViewInit {

  @ViewChild('deleteModal', { static: true}) modalDelete!: ElementRef;
  @ViewChild('btnFoco', { static: true}) buttonFoco!: ElementRef;

  private readonly subscription: Subscription = new Subscription();
  courts: CourtDTO[] | undefined;
  deleteModal: any;
  idCourtSelected: number = -1;
  courtNameSelected: string = '';

  constructor(
    public translate: TranslateService,
    private readonly courtService: CourtService,
    private readonly notificationService: NotificationService) { }

  ngOnInit(): void {
    this.loadCourts();
  }

  ngAfterViewInit(): void {
    this.deleteModal = new bootstrap.Modal(this.modalDelete.nativeElement);
  }

  loadCourts(): void {
    this.subscription.add(
      this.courtService.getCourtlist().subscribe((courts: CourtDTO[]) => {
        this.courts = [];
        this.courts = courts;
    }));
  }

  showDeleteModal(idCourt: number, nameCourt: string): void {
    this.idCourtSelected = idCourt;
    this.courtNameSelected = nameCourt;
    this.deleteModal.show();
  }

  deleteCourt(): void {
    this.subscription.add(
      this.courtService.delete(this.idCourtSelected).subscribe({
              next: (data) => {
                this.notificationService.SuccesNotification(this.translate.instant("Court.CourtDeleted"));
                this.deleteModal.hide();
              },
              error: (error) => {
                // Manejo de errores con switch según el código del backend
                if (error.error?.code) {
                  switch (error.error.code) {
                    case CodeErrorEnum.CourtWithRecords:
                      this.notificationService.ErrorNotification(this.translate.instant("Error.CourtWithRecords"));
                      break;  
                    default:
                      console.error('Error no manejado:', error.error.code);
                  }
                } else {
                  console.error('Error sin código específico:', error.message);
                }
              }
            }));
  }

  undescribe(): void {
    this.subscription.unsubscribe();
  }

}
