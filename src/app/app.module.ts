import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { HeaderComponent } from './components/header/header.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ClimaComponent } from './components/clima/clima.component';
import { MonedasComponent } from './components/monedas/monedas.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    HeaderComponent,
    ContenidoComponent,
    DirectivasComponent,
    HomeComponent,
    ClimaComponent,
    MonedasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
