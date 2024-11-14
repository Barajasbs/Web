// Ubicación: src/app/services/conductor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  private apiUrl = 'http://localhost:8080/api/conductores';

  constructor(private http: HttpClient) {}

  // Obtener todos los conductores
  getConductores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Obtener un conductor por ID
  getConductor(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo conductor
  createConductor(conductor: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, conductor);
  }

  // Actualizar un conductor existente
  updateConductor(conductor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${conductor.id}`, conductor);
  }

  // Eliminar un conductor
  deleteConductor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Asignar un bus con días específicos a un conductor
  asignarBus(conductorId: number, busId: number, dias: string[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${conductorId}/asignar-bus`, { busId, dias });
  }
}
