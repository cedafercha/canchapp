import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsPageComponent } from './page/metrics.page/metrics.page.component';

const routes: Routes = [
  {path: '', redirectTo: 'metrics', pathMatch: 'full'},
    {path: '**', redirectTo: 'metrics', pathMatch: 'full'},
    {path: 'metrics', component: MetricsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
