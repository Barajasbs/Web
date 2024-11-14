import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorListComponent } from './components/conductor-list/conductor-list.component';
import { ConductorFormComponent } from './components/conductor-form/conductor-form.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusFormComponent } from './components/bus-form/bus-form.component';
import { RutaListComponent } from './components/ruta-list/ruta-list.component';
import { RutaFormComponent } from './components/ruta-form/ruta-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Rutas para conductores
  { path: 'conductores', component: ConductorListComponent, canActivate: [AuthGuard], data: { expectedRole: 'COORDINADOR' } },
  { path: 'conductores/add', component: ConductorFormComponent, canActivate: [AuthGuard], data: { expectedRole: 'COORDINADOR' } },
  { path: 'conductores/edit/:id', component: ConductorFormComponent, canActivate: [AuthGuard], data: { expectedRole: 'COORDINADOR' } },

  // Rutas para buses
  { path: 'buses', component: BusListComponent, canActivate: [AuthGuard], data: { expectedRole: 'COORDINADOR' } },
  { path: 'buses/add', component: BusFormComponent, canActivate: [AuthGuard], data: { expectedRole: 'COORDINADOR' } },
  { path: 'buses/edit/:id', component: BusFormComponent, canActivate: [AuthGuard], data: { expectedRole: 'COORDINADOR' } },

  // Rutas para rutas de transporte
  { path: 'rutas', component: RutaListComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMINISTRADOR_RUTAS' } },
  { path: 'rutas/add', component: RutaFormComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMINISTRADOR_RUTAS' } },
  { path: 'rutas/edit/:id', component: RutaFormComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMINISTRADOR_RUTAS' } },

  // Ruta para pasajeros (solo vista de rutas)
  { path: 'rutas/view', component: RutaListComponent, canActivate: [AuthGuard], data: { expectedRole: 'PASAJERO' } },

  // Ruta de inicio de sesión
  { path: 'login', component: LoginComponent },

  // Redirección por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
