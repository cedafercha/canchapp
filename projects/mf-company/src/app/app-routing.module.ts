import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './page/company/company.page.component';

const routes: Routes = [
  {path: '', redirectTo: 'company', pathMatch: 'full'},
  {path: 'company', component: CompanyPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
