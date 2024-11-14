// Ubicación: src/app/components/bus-form/bus-form.component.ts
import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
import { RutaService } from '../../services/ruta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.css']
})
export class BusFormComponent implements OnInit {
  bus: any = { placa: '', modelo: '', rutas: [] };
  rutas: any[] = [];
  selectedRutaId: number | null = null;
  selectedDays: string[] = [];
  daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  isEditMode: boolean = false;

  constructor(
    private busService: BusService,
    private rutaService: RutaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadBus(+id);
    }
    this.loadRutas();
  }

  loadBus(id: number): void {
    this.busService.getBus(id).subscribe(
      (data) => (this.bus = data),
      (error) => console.error('Error fetching bus', error)
    );
  }

  loadRutas(): void {
    this.rutaService.getRutas().subscribe(
      (data) => (this.rutas = data),
      (error) => console.error('Error fetching rutas', error)
    );
  }

  addRutaAssignment(): void {
    if (this.selectedRutaId) {
      this.bus.rutas.push({ rutaId: this.selectedRutaId, dias: [...this.selectedDays] });
      this.selectedRutaId = null;
      this.selectedDays = [];
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.busService.updateBus(this.bus).subscribe(
        () => this.router.navigate(['/buses']),
        (error) => console.error('Error updating bus', error)
      );
    } else {
      this.busService.createBus(this.bus).subscribe(
        () => this.router.navigate(['/buses']),
        (error) => console.error('Error creating bus', error)
      );
    }
  }
}
