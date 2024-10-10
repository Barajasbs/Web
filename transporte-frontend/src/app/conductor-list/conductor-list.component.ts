import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ConductorDetailComponent } from '../conductor-detail/conductor-detail.component';

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css'],
  standalone: true , 
  imports: [CommonModule,RouterModule,RouterOutlet,RouterLink,ConductorDetailComponent]
})
export class ConductorListComponent implements OnInit {
  conductores: any[] = [];

  constructor(private conductorService: ConductorService) { }

  ngOnInit(): void {
    this.loadConductores();
  }

  loadConductores(): void {
    this.conductorService.getConductores().subscribe(
      data => {
        this.conductores = data;
      },
      error => {
        console.error('Error fetching conductores', error);
      }
    );
  }

  deleteConductor(id: number): void {
    this.conductorService.deleteConductor(id).subscribe(
      () => {
        this.loadConductores();
      },
      error => {
        console.error('Error deleting conductor', error);
      }
    );
  }
}