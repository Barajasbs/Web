// Ubicación: src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Si el login es exitoso, establece la autenticación y rol en AuthService
        this.authService.setAuthentication(true, response.role);
        this.navigateByRole(response.role);
      },
      (error) => {
        console.error('Error en inicio de sesión', error);
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );
  }

  private navigateByRole(role: string): void {
    // Navega a una ruta diferente dependiendo del rol del usuario
    switch (role) {
      case 'ADMINISTRADOR_RUTAS':
        this.router.navigate(['/rutas']);
        break;
      case 'COORDINADOR':
        this.router.navigate(['/conductores']);
        break;
      case 'PASAJERO':
        this.router.navigate(['/rutas/view']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}
