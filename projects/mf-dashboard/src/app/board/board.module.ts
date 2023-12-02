import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class BoardModule { }
