// Ubicación: src/app/components/ruta-list/ruta-list.component.ts
import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/ruta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-list',
  templateUrl: './ruta-list.component.html',
  styleUrls: ['./ruta-list.component.css']
})
export class RutaListComponent implements OnInit {
  rutas: any[] = [];

  constructor(private rutaService: RutaService, private router: Router) {}

  ngOnInit(): void {
    this.loadRutas();
  }

  loadRutas(): void {
    this.rutaService.getRutas().subscribe(
      (data) => (this.rutas = data),
      (error) => console.error('Error fetching rutas', error)
    );
  }

  deleteRuta(id: number): void {
    this.rutaService.deleteRuta(id).subscribe(
      () => this.loadRutas(),
      (error) => console.error('Error deleting ruta', error)
    );
  }

  goToAddRuta(): void {
    this.router.navigate(['/rutas/add']);
  }
}
