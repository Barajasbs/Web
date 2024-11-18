// app.routes.ts
import { Routes } from '@angular/router';
import { ConductorListComponent } from './components/conductor-list/conductor-list.component';
import { ConductorFormComponent } from './components/conductor-form/conductor-form.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusFormComponent } from './components/bus-form/bus-form.component';
import { RutaListComponent } from './components/ruta-list/ruta-list.component';
import { RutaFormComponent } from './components/ruta-form/ruta-form.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'conductores', component: ConductorListComponent },
  { path: 'conductores/add', component: ConductorFormComponent },
  { path: 'conductores/edit/:id', component: ConductorFormComponent },
  { path: 'buses', component: BusListComponent },
  { path: 'buses/add', component: BusFormComponent },
  { path: 'buses/edit/:id', component: BusFormComponent },
  { path: 'rutas', component: RutaListComponent },
  { path: 'rutas/add', component: RutaFormComponent },
  { path: 'rutas/edit/:id', component: RutaFormComponent },
];


