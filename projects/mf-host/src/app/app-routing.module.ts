import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard, authGuardMultilogin } from './guards/authGuard.guard';
import { MultiLoginComponent } from './pages/multilogin/multilogin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},  
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'multilogin',
        component: MultiLoginComponent,
        canActivate: [authGuardMultilogin]
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { 
        path: 'board',
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './BoardModule'
          })
          .then(m => m.BoardModule)
        
      },
      { 
        path: 'company',
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4203/remoteEntry.js',
            exposedModule: './CompanyModule'
          })
          .then(m => m.CompanyModule)
        
      },
      { 
        path: 'catalog', 
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4204/remoteEntry.js',
            exposedModule: './CatalogModule'
          })
          .then(m => m.CatalogModule)
        
      },
      { 
        path: 'booking', 
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4205/remoteEntry.js',
            exposedModule: './BookingModule'
          })
          .then(m => m.BookingModule)
        
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
