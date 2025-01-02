import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourtPageComponent } from './page/court.page/court.page.component';

const routes: Routes = [
  {path: '', redirectTo: 'court', pathMatch: 'full'},
  {path: 'court', component: CourtPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
