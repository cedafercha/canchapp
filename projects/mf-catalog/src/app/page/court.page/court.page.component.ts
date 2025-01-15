import { Component } from '@angular/core';
import { CourtComponent } from "../../components/court/court.component";
import { ActivatedRoute } from '@angular/router';
import { ActionEnum } from 'commons-lib';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-court.page',
  standalone: true,
  imports: [CourtComponent, TranslateModule],
  templateUrl: './court.page.component.html',
  styleUrl: './court.page.component.css'
})
export class CourtPageComponent {

  id!: any;
  actionState : ActionEnum = ActionEnum.None;
  titleName: string = '';

  constructor(
    private readonly route: ActivatedRoute,
    public translate: TranslateService) {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.actionState = this.route.snapshot.data['actionState'];
    this.setTitle();    
  }

  setTitle(): void {
    if (this.actionState === ActionEnum.Create) {
      this.titleName = this.translate.instant('Court.NewCourt');
    } else if (this.actionState === ActionEnum.Edit) {
      this.titleName = this.translate.instant('Court.EditCourt');
    } else {
      this.titleName = this.translate.instant('Court.DetailCourt');
    }
  }

}
