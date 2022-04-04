import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BoxInicioComponent } from './box-inicio/box-inicio.component';
import { BotonInicioCalculadoraComponent } from './boton-inicio-calculadora/boton-inicio-calculadora.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { BotonCalculadoraComponent } from './boton-calculadora/boton-calculadora.component';
import { TablaConversionesComponent } from './tabla-conversiones/tabla-conversiones.component'
import { FormsModule } from '@angular/forms';
import { FixerService } from './services/fixer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BoxInicioComponent,
    BotonInicioCalculadoraComponent,
    InicioComponent,
    BotonCalculadoraComponent,
    TablaConversionesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
    
  ],
  providers: [FixerService],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
