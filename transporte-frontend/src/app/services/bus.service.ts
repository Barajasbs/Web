// Ubicación: src/app/services/bus.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = 'http://localhost:8080/api/buses';

  constructor(private http: HttpClient) {}

  // Obtener todos los buses
  getBuses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Obtener un bus por ID
  getBus(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo bus
  createBus(bus: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, bus);
  }

  // Actualizar un bus existente
  updateBus(bus: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${bus.id}`, bus);
  }

  // Eliminar un bus (solo si no tiene conductores asignados)
  deleteBus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Asignar una ruta con días específicos a un bus
  asignarRuta(busId: number, rutaId: number, dias: string[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${busId}/asignar-ruta`, { rutaId, dias });
  }
}
