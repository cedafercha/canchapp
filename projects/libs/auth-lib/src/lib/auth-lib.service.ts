import { Injectable } from '@angular/core';
import { AUTH_TOKEN_KEY, PRV_AUTH_TOKEN_KEY, COMPANIES_KEY } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {
  constructor() {}

  public getToken(): string {
    return localStorage.getItem(AUTH_TOKEN_KEY) ?? localStorage.getItem(PRV_AUTH_TOKEN_KEY)!;
  };

  public setToken(token: string, isProvisional: boolean): void {
    if (isProvisional) {
      this.removeToken();
      localStorage.setItem(PRV_AUTH_TOKEN_KEY, token);
    } else {
      this.removePrvToken();
      localStorage.setItem(AUTH_TOKEN_KEY, token);
    }
  }

  public removeToken(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  public removePrvToken(): void {
    localStorage.removeItem(PRV_AUTH_TOKEN_KEY);
  }

  public logOut(): void {
    this.removeToken();
    this.removePrvToken();
  }

  public isAuthenticated(): boolean {
    // Verifica si el token existe en localStorage
    return !!localStorage.getItem(AUTH_TOKEN_KEY) && !localStorage.getItem(PRV_AUTH_TOKEN_KEY);
  }

  public isAuthenticatedMultilogin(): boolean {
    // Verifica si el token provisional existe en localStorage
    return !localStorage.getItem(AUTH_TOKEN_KEY) && !!localStorage.getItem(PRV_AUTH_TOKEN_KEY);
  }

  public getCompanies<T>(): T {
    return JSON.parse(localStorage.getItem(COMPANIES_KEY)!) as T;
  }

  public setCompanies<T>(companies: T): void {
    localStorage.setItem(COMPANIES_KEY, JSON.stringify(companies));
  }
}
