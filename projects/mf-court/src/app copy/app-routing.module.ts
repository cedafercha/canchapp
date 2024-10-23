import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCourtPageComponent } from './pages/listCourt/list-court.page.component';
import { CourtPageComponent } from './pages/court/court.page.component';

const routes: Routes = [
  {path: '', redirectTo: 'court', pathMatch: 'full'},
  {path: 'list-court', component: ListCourtPageComponent },
  {path: 'company', component: CourtPageComponent },
  {path: 'company/:id', component: CourtPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
