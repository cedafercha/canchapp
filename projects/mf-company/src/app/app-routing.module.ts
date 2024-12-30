import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './page/company/company.page.component';
import { ListProfilePageComponent } from './page/profile/list-profile.page.component';
import { ProfilePageComponent } from './page/profile/profile.page.component';

const routes: Routes = [
  {path: '', redirectTo: 'company', pathMatch: 'full'},
  {path: '**', redirectTo: 'company', pathMatch: 'full'},
  {path: 'company', component: CompanyPageComponent },
  {path: 'company/:id', component: CompanyPageComponent },
  
  
  {path: 'list-profile', component: ListProfilePageComponent },
  {path: 'profile', component: ProfilePageComponent },
  {path: 'profile/:id', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
