import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraprincipalComponent } from './vistas/barraprincipal/barraprincipal.component';
import { PresentacionComponent } from './vistas/presentacion/presentacion.component';
import { TemarioComponent } from './vistas/temario/temario.component';
import { EvaluacionComponent } from './vistas/evaluacion/evaluacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraprincipalComponent,
    PresentacionComponent,
    TemarioComponent,
    EvaluacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
