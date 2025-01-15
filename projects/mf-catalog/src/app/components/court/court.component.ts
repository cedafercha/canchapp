import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskService, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { CourtDTO } from '../../models/court.model';
import { CourtRateDTO } from '../../models/courtRate.model';
import { ActionEnum, CodeErrorEnum, CommonsLibService, NotificationService } from 'commons-lib';
import { CourtService } from '../../services/court.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

declare let bootstrap: any;

@Component({
  selector: 'app-court',
  standalone: true,
  imports: [FullCalendarModule, TranslateModule, ReactiveFormsModule, NgxMaskDirective, CommonModule],
  providers: [provideNgxMask()],
  templateUrl: './court.component.html',
  styleUrl: './court.component.css'
})
export class CourtComponent implements OnInit, AfterViewInit {

  @Input () actionState : ActionEnum = ActionEnum.None;
  @Input () id : number = 0;

  @ViewChild('priceModal', { static: true}) modalElement!: ElementRef;
  @ViewChild('calendar') calendar!: FullCalendarComponent;
  private readonly subscription: Subscription = new Subscription();
  public formCourt: FormGroup = new FormGroup({});
  public formPrice: FormGroup = new FormGroup({});
  initialLocaleCode = 'es';
  priceModal: any;
  dateStart: string = '';
  dateEnd: string = '';
  dayTmp: number = 0;
  styleDisable: string = '';
  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek', // vista semanal con horas
    locale: this.initialLocaleCode,
    allDaySlot: false,
    selectable: true,
    selectMirror: true,
    editable: true,
    select: (info) => {
      this.handleSelect(info);
    },
    eventContent: (info) => {
      return this.handleEventContent(info);
    },
    slotLabelFormat: [
      { hour12: true, hour: "numeric", minute: "2-digit" }
    ],
    slotMinTime: '05:00:00',
    dayHeaderFormat: { weekday: 'long' },
    headerToolbar: {
      left: '',  // Sección izquierda vacía
      center: '', // Sección central vacía (el título de la fecha)
      right: ''  // Sección derecha vacía
    }
  };

  constructor(
    public translate: TranslateService,
    private readonly formBuilder: FormBuilder,
    private readonly maskPipe: NgxMaskService,
    private readonly commonsService: CommonsLibService,
    private readonly courtService: CourtService,
    private readonly notificationService: NotificationService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef) {
      this.formCourt = this.formBuilder.group({
        idCourt: [0],
        name: ['', [Validators.required]],
        description: [''],
        isActive: [true],
        color: ['#3788D8'],
      });
      this.formPrice = this.formBuilder.group({
        price: ['0', [Validators.required]],
      });

      this.maskPipe.prefix = '$ ';
      this.maskPipe.thousandSeparator = '.';
      this.maskPipe.decimalMarker = ',';
    }

  ngOnInit(): void {

    this.formCourt.get('color')?.valueChanges.subscribe(newColor => {
      this.calendar.getApi().getEvents().forEach(itemEvent => {
        itemEvent.setProp('backgroundColor', newColor);
        itemEvent.setProp('borderColor', newColor);
      });
    });   
  }

  setConfigByState() {
    switch (this.actionState) {
      case ActionEnum.Create:
        this.formCourt.enable();
        break;        
      case ActionEnum.Edit:
        this.loadCourt();
        break;
      default: // Detail
        this.loadCourt();
        this.styleDisable = "disabled-calendar";
        this.calendar.options!.editable = false;
        this.calendar.options!.selectable = false;
        this.formCourt.disable();
        break;
    }
    this.cdr.detectChanges();
  }

  loadCourt(): void {
    this.subscription.add(
      this.courtService.getCourtAndRates(this.id).subscribe((court: CourtDTO) => {
        this.formCourt.patchValue(court);

        court.courtRates.forEach(item => {

          const extraData = { 
            startTime: item.timeStart,
            endTime: item.timeEnd,
            day: item.day
          };

          const eventTmp: EventInput = { 
            id: item.idCourtRate!.toString(), 
            title: item.price!.toString(), 
            startTime:  item.timeStart,
            endTime: item.timeEnd,
            daysOfWeek: [item.day],
            backgroundColor: court.color,
            borderColor: court.color,            
            extendedProps: extraData
          };
          this.calendar.getApi().addEvent(eventTmp);
        });
      })
    );
  }

  ngAfterViewInit(): void {
    this.priceModal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.setConfigByState();
  }

  handleSelect(info: any) {
    console.log(info);
    this.dateStart = info.startStr;
    this.dateEnd = info.endStr;
    this.dayTmp = info.start.getDay();
    this.priceModal.show();
  }

  handleEventContent(info: any) {
    const formattedTitle = this.maskPipe.applyMask(info.event.title, 'separator.2');
    return {
      html: `<div class="d-flex align-items-center justify-content-center" style="height: 100%;">${formattedTitle}</div>`
    };
  }

  savePrice() {
    this.formPrice.markAllAsTouched();
    if(this.formPrice.valid) {

      let startTimeTmp = this.commonsService.getTime(this.dateStart);
      let endTimeTmp = this.commonsService.getTime(this.dateEnd);
      const idTmp = (new Date()).getTime().toString();

      this.calendar.getApi().addEvent({
        id: idTmp,
        title: this.formPrice.value.price,
        startTime: startTimeTmp,
        endTime: endTimeTmp,
        daysOfWeek: [this.dayTmp],
        backgroundColor: this.formCourt.value.color,
        borderColor: this.formCourt.value.color,
        extendedProps: {
          startTime: startTimeTmp,
          endTime: endTimeTmp,
          day: this.dayTmp
        }
      });
      this.priceModal.hide();
    }
  }

  cancelCourt(){
    this.router.navigate(['/catalog/court-list']);
  }

  saveCourt() {
    this.formCourt.markAllAsTouched();
    if(this.formCourt.valid) {

      let court: CourtDTO = new CourtDTO();
      
      court.idCourt = this.formCourt.value.idCourt;
      court.name = this.formCourt.value.name;
      court.description = this.formCourt.value.description;
      court.color = this.formCourt.value.color;
      court.isActive = this.formCourt.value.isactive;
      court.courtRates = [];

      this.calendar.getApi().getEvents().forEach(itemEvent => {        
          let courtRate = new CourtRateDTO();
          courtRate.idCourtRate = itemEvent.id;
          courtRate.price = parseFloat(itemEvent.title);
          courtRate.timeStart = itemEvent.extendedProps['startTime'];
          courtRate.timeEnd = itemEvent.extendedProps['endTime'];
          courtRate.day = itemEvent.extendedProps['day'];
          court.courtRates.push(courtRate);
      });

      court.courtRates = court.courtRates.filter((rate, index, self) => {
        const uniqueKey = `${rate.day}-${rate.timeEnd}-${rate.timeStart}`;
        return self.findIndex(r => `${r.day}-${r.timeEnd}-${r.timeStart}` === uniqueKey) === index;
      });

      this.subscription.add(this.courtService.upsert(court).subscribe({
        next: (data) => {
          this.loadCourt();
          this.notificationService.SuccesNotification(this.translate.instant("Court.CourtCreated"));
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
  }


}
