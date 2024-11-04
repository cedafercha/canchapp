import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDTO, PhoneDTO } from '../../models/company.model';
import { NotificationService } from 'commons-lib';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-company-data',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, CommonModule],
  templateUrl: './company-data.component.html',
  styleUrl: './company-data.component.css'
})

export class CompanyDataComponent implements OnInit {

  public formCompany: FormGroup = new FormGroup({});
  msgSave: string = '';
  msgError: string = '';

  constructor(
    public translate: TranslateService,
    private readonly companyService: CompanyService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService) {

      forkJoin({
        msg1: this.translate.get('Commons.MessageErrorNoti'),
        msg2: this.translate.get('Commons.MessageSuccessSaveNoti')
      }).subscribe((resultados) => {
        this.msgError = resultados.msg1;
        this.msgSave = resultados.msg2;
      });

  }

  ngOnInit(): void {

    this.formCompany = this.formBuilder.group({
      name: ['', [Validators.required]],
      direction: ['', Validators.required],
      phoneArray: this.formBuilder.array([]),
      phone: ['', [Validators.pattern(/^\d{6,10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      allowedUsers: [''],
      allowedCourt: [''],
    });
    this.loadCompany();
  }

  // Getter para acceder al FormArray de 'phones'
  get phoneArray(): FormArray {
    return this.formCompany.get('phoneArray') as FormArray;
  }

  // Método para inicializar el FormArray con los datos obtenidos
  setPhones(phoneNumbers: PhoneDTO[]): void {
    phoneNumbers.forEach((number) => {
      const phoneFormGroup = this.formBuilder.group({
        number: [number, [Validators.required, Validators.pattern(/^\d{6,10}$/)]]
      });
      this.phoneArray.push(phoneFormGroup);
    });
  }

  // Método para agregar un nuevo campo de teléfono
  addPhone(): void {
    if(this.formCompany.controls['phone'].valid) {
      const phoneFormGroup = this.formBuilder.group({
        number: [this.formCompany.get('phone')?.value, [Validators.required, Validators.pattern(/^\d{6,10}$/)]]
      });
      this.phoneArray.push(phoneFormGroup);
      this.formCompany.get('phone')?.setValue('');
    }
  }

  // Método para eliminar un campo de teléfono
  removePhone(index: number): void {
    this.phoneArray.removeAt(index);
  }

  loadCompany(): void {
    this.companyService.get().subscribe({
      next: (company: CompanyDTO) => {
        this.setPhones(company.phoneArray);
        this.formCompany.patchValue(company);
      },
      error: err => console.error('Observable [companyService.get()] emitted an error: ' + err)
    });
  }

  onUpdate() {
    if(this.formCompany.valid) {
      let companyTmp: CompanyDTO = this.formCompany.value;
      companyTmp.phones = companyTmp.phoneArray.map((phone: { number: string }) => phone.number).join('|');
      
      this.companyService.update(companyTmp).subscribe({
        next: (company: CompanyDTO) => {          
          this.formCompany.patchValue(company);
          this.notificationService.SuccesNotification(this.msgSave);
        },
        error: err => { 
          this.notificationService.ErrorNotification(this.msgError);
          console.error('Observable [companyService.update()] emitted an error: ' + err)
        }
      });
    }
  }  

  onCancel(): void {
    this.router.navigate(['company/list']);
  }

}
