import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardtestComponent } from './boardtest/boardtest.component';

const routes: Routes = [{
  path: '',
  component: BoardtestComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
