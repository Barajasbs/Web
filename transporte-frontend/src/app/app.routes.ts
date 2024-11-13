import { Routes } from '@angular/router';
import { ConductorListComponent } from './components/conductor-list/conductor-list.component';
import { ConductorDetailComponent } from './components/conductor-detail/conductor-detail.component';
import { ConductorFormComponent } from './components/conductor-form/conductor-form.component';

export const routes: Routes = [
  { path: 'conductores', component: ConductorListComponent },
  { path: 'details/:id', component: ConductorDetailComponent },
  { path: 'add', component: ConductorFormComponent },
  { path: 'edit/:id', component: ConductorFormComponent },
  { path: '', redirectTo: '/conductores', pathMatch: 'full' }
];