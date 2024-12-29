import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ActionEnum, BrowserComponent, BrowserIdEnum, CommonsLibService, SelectComponent, SelectIdEnum } from 'commons-lib';
import { EventDTO } from '../../models/event.model';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, BrowserComponent, SelectComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})

export class EventComponent implements OnInit, OnChanges {

  public formEvent: FormGroup = new FormGroup({});
  msgSave: string = '';
  browserId: BrowserIdEnum;
  selectId: SelectIdEnum;
  eventEdit: EventDTO = new EventDTO();

  @Input() actionState: ActionEnum = ActionEnum.None;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly commonsLibService: CommonsLibService) {
    this.browserId = BrowserIdEnum.BrowserCustomer;
    this.selectId = SelectIdEnum.ListCourt;
  }

  ngOnInit(): void {

    this.formEvent = this.formBuilder.group({
      dateTimeStart: [''],
      dateTimeEnd: [''],
      dateTimeStartNew: [''],
      dateTimeEndNew: [''],
      timeStart: ['', [Validators.required]],
      timeEnd: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      court: ['-1', [Validators.required]],
      isRecurrent: [false],
      observation: [''],
      paymentType: ['0']
    }, 
    { validators: this.validateTimeOrder });
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['actionState']) {
      this.handleActionStateChange(changes['actionState'].currentValue);
    }    
  }

  private handleActionStateChange(actionState: ActionEnum): void {
    this.formEvent.enable();
    if (this.actionState == ActionEnum.Edit) {
      this.formEvent.disable();
      this.formEvent.controls['observation'].enable();
      this.formEvent.controls['timeStart'].enable();
      this.formEvent.controls['timeEnd'].enable();
    }
  }

  get autocompleteCustomer(): FormControl {
    return this.formEvent.get('customer') as FormControl;
  }

  get selectCourt(): FormControl {
    return this.formEvent.get('court') as FormControl;
  }

  validateTimeOrder(control: AbstractControl): { [key: string]: boolean } | null {
    const timeStart = control.get('timeStart')?.value;
    const timeEnd = control.get('timeEnd')?.value;

    if (timeStart && timeEnd && timeStart >= timeEnd) {
      return { invalidTimeOrder: true };
    }
    return null;
  }

  getEvent(): EventDTO | null {
    this.formEvent.markAllAsTouched();
    if(this.formEvent.valid) {
      let eventTmp: EventDTO = this.formEvent.getRawValue() as EventDTO;
      eventTmp.idBooking = this.eventEdit.idBooking;
      eventTmp.paymentType = Number(eventTmp.paymentType);
      if(this.actionState == ActionEnum.Edit) {

        eventTmp.dateTimeStart = this.commonsLibService.getFormatIsoDate(eventTmp.dateTimeStartNew, eventTmp.timeStart);
        eventTmp.dateTimeEnd = this.commonsLibService.getFormatIsoDate(eventTmp.dateTimeEndNew, eventTmp.timeEnd);

      }
      return eventTmp;
    }
    return null;
  }

  loadEvent(event: EventDTO): void {    
    this.eventEdit = event;
    this.formEvent.patchValue(event);
    const formattedStartTime = this.formatTime(new Date(this.eventEdit.dateTimeStartNew));
    const formattedEndTime = this.formatTime(new Date(this.eventEdit.dateTimeEndNew));
    this.formEvent.get('timeStart')?.setValue(formattedStartTime);
    this.formEvent.get('timeEnd')?.setValue(formattedEndTime);
  }

}
