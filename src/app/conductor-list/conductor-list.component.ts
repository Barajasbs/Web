import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../conductor.model';

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
})
export class ConductorListComponent implements OnInit {
  conductores: Conductor[] = [];

  constructor(private conductorService: ConductorService) {}

  ngOnInit(): void {
    this.conductorService.getAllConductores().subscribe(data => {
      this.conductores = data;
    });
  }
}
