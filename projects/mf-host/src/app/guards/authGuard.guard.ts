import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;  // Permite el acceso si el usuario está autenticado
  } else {
    router.navigate(['/login']);  // Redirige a la página de inicio de sesión si no está autenticado
    return false;
  }
  
};

export const authGuardMultilogin: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticatedMultilogin()) {
    return true;  // Permite el acceso si el usuario está autenticado
  } else if (authService.isAuthenticated()) {
    router.navigate(['/company']);  // Redirige a la página de la empresa
    return false;
  }
  else {
    router.navigate(['/login']);  // Redirige a la página de inicio de sesión si no está autenticado
    return false;
  }
};