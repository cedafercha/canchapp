import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from '../models/login';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:5197/api/Security/Login';

  constructor(private http: HttpClient, 
    private router: Router) { 
      
    }

  Login(auth: AuthCredentials) {
    return this.http.post<any>(this.apiUrl, auth).pipe(
      tap(response => {
        // Almacena el token en localStorage si la autenticación fue exitosa
        localStorage.setItem('TKCANCHAPP', response.token);
        // Redirige al dashboard
        this.router.navigate(['/court']);
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
