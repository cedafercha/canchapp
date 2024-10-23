import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'board',
    loadChildren: () => 
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './BoardModule'
      })
      .then(m => m.BoardModule)
    
  },
  { 
    path: 'court',
    loadChildren: () => 
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        exposedModule: './CourtModule'
      })
      .then(m => m.CourtModule)
    
  },
  { 
    path: 'company',
    loadChildren: () => 
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './CompanyModule'
      })
      .then(m => m.CompanyModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
