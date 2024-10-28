import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { AuthCredentials } from '../../models/login';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    public translate: TranslateService,
    private fb: FormBuilder, 
    private authService: AuthService) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

  onClicklogin() {
    if (this.loginForm.valid) {
      const credentials: AuthCredentials = this.loginForm.value;
      this.authService.Login(credentials).subscribe(
        () => console.log('Login exitoso'),
        (error) => console.error('Error en la autenticación:', error)
      );
    }
  }

}
