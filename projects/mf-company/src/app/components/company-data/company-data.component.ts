import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-data',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, CommonModule],
  templateUrl: './company-data.component.html',
  styleUrl: './company-data.component.css'
})
export class CompanyDataComponent implements OnInit {

  private companyId?: string | null;
  public companyEdit?: Company;
  public formCompany: FormGroup = new FormGroup({});

  constructor(
    public translate: TranslateService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('id');
    this.initForm();
    this.onLoadCompany();
  }

  initForm(): void {
    this.formCompany = this.formBuilder.group({
      _id: '',
      name: new FormControl('', [Validators.required]),
      identification: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onLoadCompany(): void {
    if(this.companyId) {
      this.companyService.find(this.companyId).subscribe(res => {
        this.companyEdit = res;
        this.formCompany.patchValue(this.companyEdit);
      });
    }
  }

  onSave() {
    if(this.companyId) {
      this.companyService.update(this.formCompany.value).subscribe(res => {
        this.onCancel();
      });
    } else {
      this.companyService.create(this.formCompany.value).subscribe(res => {
        this.onCancel();
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['company/list']);
  }

}
