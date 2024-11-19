import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConductorService } from '../../services/conductor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ConductorDetailComponent implements OnInit {
  conductor: any;

  constructor(
    private route: ActivatedRoute,
    private conductorService: ConductorService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadConductor(+id);
    }
  }

  loadConductor(id: number): void {
    this.conductorService.getConductor(id).subscribe(
      data => {
        this.conductor = data;
      },
      error => {
        console.error('Error fetching conductor details', error);
      }
    );
  }
}