// app.config.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Aquí cargamos las rutas
  exports: [RouterModule],  // Exportamos RouterModule para que esté disponible globalmente
  providers: []  // Aseguramos que 'providers' esté disponible, incluso si está vacío
})
export class appConfig {}  // Esta clase de configuración tiene 'providers'
