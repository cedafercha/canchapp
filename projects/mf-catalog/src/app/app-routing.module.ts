import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogListPageComponent } from './page/catalog-list.page/catalog-list.page.component';
import { CourtListPageComponent } from './page/court-list.page/court-list.page.component';

const routes: Routes = [  
  {path: 'list', component: CatalogListPageComponent },
  {path: 'court-list', component: CourtListPageComponent },
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
