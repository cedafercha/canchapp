import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials, ICompanyLogin, ILoginToken } from '../models/login';
import { tap } from 'rxjs/operators';
import { ApiEnum } from 'commons-lib';
import { AuthLibService } from 'auth-lib';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = ApiEnum.Security;

  constructor(
    private readonly http: HttpClient, 
    private readonly router: Router,
    private readonly authLibService: AuthLibService
  ) {}

  Login(auth: AuthCredentials) {
    return this.http.post<any>(`${this.apiUrl}Login`, auth).pipe(
      tap<ILoginToken>(response => {
        // Almacena el token en localStorage si la autenticación fue exitosa
        this.authLibService.setCompanies(response.companies);
        this.authLibService.setToken(response.token, response.isProvisional);
        this.redirectLogin(response.isProvisional);
      })
    );
  }

  redirectLogin(isProvisionalToken: boolean): void {
    // Redirige al multilogin si el token es provisional
    isProvisionalToken
      ? this.router.navigate(['/multilogin'])
      : this.router.navigate(['/dashboard']);
  }

  logout(): void {
    // Elimina el token del almacenamiento y redirige al inicio de sesión
    this.authLibService.logOut();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.authLibService.isAuthenticated();
  }

  isAuthenticatedMultilogin(): boolean {
    return this.authLibService.isAuthenticatedMultilogin();
  }

  getCompaniesLogin(): ICompanyLogin[] {
    return this.authLibService.getCompanies<ICompanyLogin[]>();
  }
}
