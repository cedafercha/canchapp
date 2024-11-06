import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './page/booking/booking.page.component';

const routes: Routes = [
  {path: '', redirectTo: 'booking', pathMatch: 'full'},
  {path: 'booking', component: BookingPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
