import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from '../conductor.service';


@Component({
  selector: 'app-conductor-form',
  templateUrl: './conductor-form.component.html',
  styleUrls: ['./conductor-form.component.css'], 
  standalone:true, 
  imports: [CommonModule,RouterModule, FormsModule]
})
export class ConductorFormComponent implements OnInit {
  conductor: any = {};
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conductorService: ConductorService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadConductor(+id);
    }
  }

  loadConductor(id: number): void {
    this.conductorService.getConductor(id).subscribe(
      data => {
        this.conductor = data;
      },
      error => {
        console.error('Error fetching conductor', error);
      }
    );
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.conductorService.updateConductor(this.conductor.id, this.conductor).subscribe(
        () => {
          this.router.navigate(['/conductores']);
        },
        error => {
          console.error('Error updating conductor', error);
        }
      );
    } else {
      this.conductorService.createConductor(this.conductor).subscribe(
        () => {
          this.router.navigate(['/conductores']);
        },
        error => {
          console.error('Error creating conductor', error);
        }
      );
    }
  }
}