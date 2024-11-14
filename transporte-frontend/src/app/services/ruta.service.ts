// Ubicación: src/app/services/ruta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private apiUrl = 'http://localhost:8080/api/rutas';

  constructor(private http: HttpClient) {}

  // Obtener todas las rutas
  getRutas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Obtener una ruta por ID
  getRuta(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva ruta
  createRuta(ruta: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, ruta);
  }

  // Actualizar una ruta existente
  updateRuta(ruta: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${ruta.id}`, ruta);
  }

  // Eliminar una ruta (solo si no tiene buses asignados)
  deleteRuta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
