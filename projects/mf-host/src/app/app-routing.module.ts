import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('mfUser/UserComponent').then( (m) => m.UserComponent)
  },
  {
    path: '',
    loadChildren: () => import('mfDashBoard/BoardtestComponent').then( (m) => m.BoardtestComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
