// Ubicación: src/app/components/conductor-form/conductor-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../services/conductor.service';
import { BusService } from '../../services/bus.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conductor-form',
  templateUrl: './conductor-form.component.html',
  styleUrls: ['./conductor-form.component.css']
})
export class ConductorFormComponent implements OnInit {
  conductor: any = { nombre: '', cedula: '', telefono: '', direccion: '', buses: [] };
  buses: any[] = [];
  selectedBusId: number | null = null;
  selectedDays: string[] = [];
  daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  isEditMode: boolean = false;

  constructor(
    private conductorService: ConductorService,
    private busService: BusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadConductor(+id);
    }
    this.loadBuses();
  }

  loadConductor(id: number): void {
    this.conductorService.getConductor(id).subscribe(
      (data) => (this.conductor = data),
      (error) => console.error('Error fetching conductor', error)
    );
  }

  loadBuses(): void {
    this.busService.getBuses().subscribe(
      (data) => (this.buses = data),
      (error) => console.error('Error fetching buses', error)
    );
  }

  addBusAssignment(): void {
    if (this.selectedBusId) {
      this.conductor.buses.push({ busId: this.selectedBusId, dias: [...this.selectedDays] });
      this.selectedBusId = null;
      this.selectedDays = [];
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.conductorService.updateConductor(this.conductor).subscribe(
        () => this.router.navigate(['/conductores']),
        (error) => console.error('Error updating conductor', error)
      );
    } else {
      this.conductorService.createConductor(this.conductor).subscribe(
        () => this.router.navigate(['/conductores']),
        (error) => console.error('Error creating conductor', error)
      );
    }
  }
}
