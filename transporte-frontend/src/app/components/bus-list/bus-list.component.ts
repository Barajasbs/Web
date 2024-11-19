// Ubicación: src/app/components/bus-list/bus-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],
  standalone:true, 
  imports: [CommonModule,RouterModule,FormsModule]
})
export class BusListComponent implements OnInit {
  buses: any[] = [];

  constructor(private busService: BusService, private router: Router) {}

  ngOnInit(): void {
    this.loadBuses();
  }

  loadBuses(): void {
    this.busService.getBuses().subscribe(
      (data) => (this.buses = data),
      (error) => console.error('Error fetching buses', error)
    );
  }

  deleteBus(id: number): void {
    this.busService.deleteBus(id).subscribe(
      () => this.loadBuses(),
      (error) => console.error('Error deleting bus', error)
    );
  }

  goToAddBus(): void {
    this.router.navigate(['/buses/add']);
  }
}
