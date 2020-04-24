import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesMartesComponent } from './observables-martes/observables-martes.component';
import { OperadoresMiercolesComponent } from './operadores-miercoles/operadores-miercoles.component';
import { FlexboxViernesComponent } from './flexbox-viernes/flexbox-viernes.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesMartesComponent,
    OperadoresMiercolesComponent,
    FlexboxViernesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
