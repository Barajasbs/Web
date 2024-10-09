import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Importación de HttpClientModule
import { AppRoutingModule } from './app-routing.module';  // Importa tu archivo de enrutamiento
import { AppComponent } from './app.component';  // Importa el componente principal

@NgModule({
  declarations: [
    AppComponent,
    // Aquí van tus componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Archivo de enrutamiento
    HttpClientModule   // Archivo para peticiones HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
