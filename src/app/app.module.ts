import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaActividadesComponent } from './lista-actividades/lista-actividades.component';
import { ActividadesComponent } from './actividades/actividades.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaActividadesComponent,
    ActividadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
