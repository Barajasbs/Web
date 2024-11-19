import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Para routerLink

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(FormsModule,RouterModule,CommonModule)
  ]
}).catch(err => console.error(err));