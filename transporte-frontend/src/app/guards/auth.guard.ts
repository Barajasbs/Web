// Ubicación: src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole']; // Cambiado a notación de corchetes

    // Verifica si el usuario está autenticado y tiene el rol esperado
    if (!this.authService.isLoggedIn() || this.authService.getRole() !== expectedRole) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
