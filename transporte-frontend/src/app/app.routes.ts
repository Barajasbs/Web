import { Routes } from '@angular/router';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { ConductorFormComponent } from './conductor-form/conductor-form.component';

export const routes: Routes = [
  { path: 'conductores', component: ConductorListComponent },
  { path: 'conductores/:id', component: ConductorDetailComponent },
  { path: 'add', component: ConductorFormComponent },
  { path: 'edit/:id', component: ConductorFormComponent },
  { path: '', redirectTo: '/conductores', pathMatch: 'full' }
];