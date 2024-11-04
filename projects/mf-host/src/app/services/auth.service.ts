import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from '../models/login';
import { tap } from 'rxjs/operators';
import { ApiEnum } from 'commons-lib';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = ApiEnum.Security;

  constructor(
    private readonly http: HttpClient, 
    private readonly router: Router) { 
      
    }

  Login(auth: AuthCredentials) {
    return this.http.post<any>(`${this.apiUrl}Login`, auth).pipe(
      tap(response => {
        // Almacena el token en localStorage si la autenticación fue exitosa
        localStorage.setItem('TKCANCHAPP', response.token);
        // Redirige al dashboard
        this.router.navigate(['/company']);
      })
    );
  }

  logout(): void {
    // Elimina el token del almacenamiento y redirige al inicio de sesión
    localStorage.removeItem('TKCANCHAPP');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    // Verifica si el token existe en localStorage
    return !!localStorage.getItem('TKCANCHAPP');
  }

}
