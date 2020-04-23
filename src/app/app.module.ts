import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesMartesComponent } from './observables-martes/observables-martes.component';
import { OperadoresMiercolesComponent } from './operadores-miercoles/operadores-miercoles.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesMartesComponent,
    OperadoresMiercolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
