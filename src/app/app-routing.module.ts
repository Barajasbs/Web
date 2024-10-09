import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorFormComponent } from './conductor-form/conductor-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/conductores', pathMatch: 'full' },
  { path: 'conductores', component: ConductorListComponent },
  { path: 'conductores/add', component: ConductorFormComponent },
  { path: 'conductores/edit/:id', component: ConductorFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
