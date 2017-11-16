import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaAsistentesComponent } from './components/lista-asistentes/lista-asistentes.component';

import { appRouting } from './app.routes';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaAsistentesComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
