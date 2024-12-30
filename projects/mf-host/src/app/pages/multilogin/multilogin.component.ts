import { Component, OnInit } from '@angular/core';
import { AuthCredentials, ICompanyLogin } from '../../models/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'multilogin',
  templateUrl: './multilogin.component.html',
  styleUrl: './multilogin.component.scss'
})
export class MultiLoginComponent implements OnInit {
  public companies: ICompanyLogin[] = [];

  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setCompanies();
  }

  private setCompanies(): void {
    this.companies = this.authService.getCompaniesLogin();
  }

  public login(email: string, tenantId: string): void {
    const credentials: AuthCredentials = {
      email,
      tenantId
    };

    this.authService.Login(credentials).subscribe(
      () => console.log('Login exitoso'),
      (error) => console.error('Error en la autenticación:', error)
    );
  }
}