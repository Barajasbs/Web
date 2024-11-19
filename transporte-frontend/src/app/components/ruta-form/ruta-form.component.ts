// Ubicación: src/app/components/ruta-form/ruta-form.component.ts
import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/ruta.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ruta-form',
  templateUrl: './ruta-form.component.html',
  styleUrls: ['./ruta-form.component.css'],
  standalone:true, 
  imports: [CommonModule,RouterModule, FormsModule],
})
export class RutaFormComponent implements OnInit {
  ruta: any = { codigo: '', estaciones: '', horario: '' };
  isEditMode: boolean = false;

  constructor(
    private rutaService: RutaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadRuta(+id);
    }
  }

  loadRuta(id: number): void {
    this.rutaService.getRuta(id).subscribe(
      (data) => (this.ruta = data),
      (error) => console.error('Error fetching ruta', error)
    );
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.rutaService.updateRuta(this.ruta).subscribe(
        () => this.router.navigate(['/rutas']),
        (error) => console.error('Error updating ruta', error)
      );
    } else {
      this.rutaService.createRuta(this.ruta).subscribe(
        () => this.router.navigate(['/rutas']),
        (error) => console.error('Error creating ruta', error)
      );
    }
  }
}
