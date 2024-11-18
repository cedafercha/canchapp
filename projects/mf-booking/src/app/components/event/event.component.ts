import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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

export class EventComponent implements OnInit {

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
      customer: ['', [Validators.required]],
      court: ['', [Validators.required]]
    });
    
  }

  get autocompleteCustomer(): FormControl {
    return this.formEvent.get('customer') as FormControl;
  }

  get selectCourt(): FormControl {
    return this.formEvent.get('court') as FormControl;
  }

  getEvent() {
    if(this.formEvent.valid) {
      let eventmp: EventDTO = this.formEvent.value;
      console.log(eventmp);
    }
  }

  getCountry(): void {
    this.selectCourt.disable();
    console.log(this.autocompleteCustomer.value);
  }

}
