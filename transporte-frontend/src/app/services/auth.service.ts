// Ubicación: src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private isAuthenticated = false;
  private userRole: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  logout(): void {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe(() => {
      this.isAuthenticated = false;
      this.userRole = null;
      this.router.navigate(['/login']);
    });
  }

  setAuthentication(isAuthenticated: boolean, role: string): void {
    this.isAuthenticated = isAuthenticated;
    this.userRole = role;
  }

  getRole(): string | null {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
