import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CompanyModule { }
