// Ubicación: src/app/components/conductor-list/conductor-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../../services/conductor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit {
  conductores: any[] = [];

  constructor(private conductorService: ConductorService, private router: Router) {}

  ngOnInit(): void {
    this.loadConductores();
  }

  loadConductores(): void {
    this.conductorService.getConductores().subscribe(
      (data) => {
        this.conductores = data;
      },
      (error) => {
        console.error('Error fetching conductores', error);
      }
    );
  }

  deleteConductor(id: number): void {
    this.conductorService.deleteConductor(id).subscribe(
      () => this.loadConductores(),
      (error) => console.error('Error deleting conductor', error)
    );
  }

  goToAddConductor(): void {
    this.router.navigate(['/conductores/add']);
  }
}
