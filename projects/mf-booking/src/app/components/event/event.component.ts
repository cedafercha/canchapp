import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserComponent, BrowserIdEnum, SelectComponent, SelectIdEnum } from 'commons-lib';
import { EventDTO } from '../../models/event.model';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, BrowserComponent, SelectComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})

export class EventComponent implements OnInit, OnChanges {

  @Input() dateTimeStart?: string;
  @Input() dateTimeEnd?: string;

  public formEvent: FormGroup = new FormGroup({});
  msgSave: string = '';
  browserId: BrowserIdEnum;
  selectId: SelectIdEnum;

  constructor(private readonly formBuilder: FormBuilder) {
    this.browserId = BrowserIdEnum.BrowserCustomer;
    this.selectId = SelectIdEnum.ListCourt;
  }

  ngOnInit(): void {

    this.formEvent = this.formBuilder.group({
      dateTimeStart: [this.dateTimeStart],
      dateTimeEnd: [this.dateTimeEnd],
      dateTimeStartISO: [this.dateTimeStart],
      dateTimeEndISO: [this.dateTimeEnd],
      customer: ['', [Validators.required]],
      court: ['', [Validators.required]],
      isRecurrent: [false],
      observation: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateTimeStart'] && this.formEvent) {
      this.formEvent.get('dateTimeStart')?.setValue(this.dateTimeStart);
    }
    if (changes['dateTimeEnd'] && this.formEvent) {
      this.formEvent.get('dateTimeEnd')?.setValue(this.dateTimeEnd);
    }
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
      return eventTmp;
    }
    return null;
  }

  getCountry(): void {
    this.selectCourt.disable();
    console.log(this.autocompleteCustomer.value);
  }

}
