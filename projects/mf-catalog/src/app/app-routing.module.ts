import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogListPageComponent } from './page/catalog-list.page/catalog-list.page.component';
import { CourtListPageComponent } from './page/court-list.page/court-list.page.component';
import { CourtPageComponent } from './page/court.page/court.page.component';
import { ActionEnum } from 'commons-lib';

const routes: Routes = [  
  {path: 'list', component: CatalogListPageComponent },
  {path: 'court-list', component: CourtListPageComponent },
  {path: 'court-new', component: CourtPageComponent, data: { actionState: ActionEnum.Create } },
  {path: 'court-edit/:id', component: CourtPageComponent, data: { actionState: ActionEnum.Edit } },
  {path: 'court-detail/:id', component: CourtPageComponent, data: { actionState: ActionEnum.Detail } },
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
