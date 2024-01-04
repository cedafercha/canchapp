import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-data',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, CommonModule],
  templateUrl: './company-data.component.html',
  styleUrl: './company-data.component.css'
})
export class CompanyDataComponent implements OnInit {

  public formCompany: FormGroup = new FormGroup({});

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formCompany = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSave() {
    console.warn(this.formCompany);
  }

}
