// app.config.server.ts
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // Importamos la configuración

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()  // Agregamos el servidor de renderizado como proveedor
  ]
};

// Hacemos merge entre la configuración de appConfig y serverConfig
export const config = mergeApplicationConfig(appConfig, serverConfig);
