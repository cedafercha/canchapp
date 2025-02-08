import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CustomerQuickDTO } from '../../models/customerQuick.interface';

@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {

  public formCustomer: FormGroup = new FormGroup({});

  constructor(
    public translate: TranslateService,
    private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.formCustomer = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  getCustomer(): CustomerQuickDTO | null {
    this.formCustomer.markAllAsTouched();
    if(this.formCustomer.valid) {
      let customerTmp: CustomerQuickDTO = this.formCustomer.getRawValue() as CustomerQuickDTO;
      return customerTmp;
    }
    return null;
  }

}
