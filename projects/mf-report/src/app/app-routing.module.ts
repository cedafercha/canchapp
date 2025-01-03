import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellersPageComponent } from './page/bestsellers.page/bestsellers.page.component';

const routes: Routes = [
  {path: '', redirectTo: 'reportUno', pathMatch: 'full'},
  {path: 'reportUno', component: BestSellersPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
