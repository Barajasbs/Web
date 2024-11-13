import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  private apiUrl = 'http://localhost:8080/api/conductores';

  constructor(private http: HttpClient) { }

  getConductores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getConductor(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createConductor(conductor: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, conductor);
  }

  updateConductor(id: number, conductor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, conductor);
  }

  deleteConductor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}