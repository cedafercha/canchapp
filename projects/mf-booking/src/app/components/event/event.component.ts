import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ActionEnum, BrowserComponent, BrowserIdEnum, SelectComponent, SelectIdEnum } from 'commons-lib';
import { EventDTO } from '../../models/event.model';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, BrowserComponent, SelectComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})

export class EventComponent implements OnInit {

  public formEvent: FormGroup = new FormGroup({});
  msgSave: string = '';
  browserId: BrowserIdEnum;
  selectId: SelectIdEnum;
  eventEdit: EventDTO = new EventDTO();

  @Input() actionState: ActionEnum = ActionEnum.None;

  constructor(private readonly formBuilder: FormBuilder) {
    this.browserId = BrowserIdEnum.BrowserCustomer;
    this.selectId = SelectIdEnum.ListCourt;
  }

  ngOnInit(): void {

    this.formEvent = this.formBuilder.group({
      dateTimeStart: [this.eventEdit.dateTimeStart],
      dateTimeEnd: [this.eventEdit.dateTimeEnd],
      dateTimeStartNew: [this.eventEdit.dateTimeStart],
      dateTimeEndNew: [this.eventEdit.dateTimeEnd],
      customer: ['', [Validators.required]],
      court: ['-1', [Validators.required]],
      isRecurrent: [false],
      observation: ['']
    });
  }

  get autocompleteCustomer(): FormControl {
    return this.formEvent.get('customer') as FormControl;
  }

  get selectCourt(): FormControl {
    return this.formEvent.get('court') as FormControl;
  }

  getEvent(): EventDTO | null {
    this.formEvent.markAllAsTouched();
    if(this.formEvent.valid) {
      const eventTmp: EventDTO = this.formEvent.value as EventDTO;
      if(this.eventEdit.idBooking > 0) {
        eventTmp.idBooking = this.eventEdit.idBooking;
        eventTmp.dateTimeStart = eventTmp.dateTimeStartNew;
        eventTmp.dateTimeEnd = eventTmp.dateTimeEndNew;
      }
      
      return eventTmp;
    }
    return null;
  }

  loadEvent(event: EventDTO): void {
    this.eventEdit = event;
    this.formEvent.patchValue(event);
  }

}
