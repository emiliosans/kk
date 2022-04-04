import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-boton-inicio-calculadora',
  templateUrl: './boton-inicio-calculadora.component.html',
  styleUrls: ['./boton-inicio-calculadora.component.scss']
})
export class BotonInicioCalculadoraComponent implements OnInit {

  mostrar:boolean
  @Output() botonPulsado: EventEmitter<boolean>;
  constructor() { 
  
    this.botonPulsado = new EventEmitter();
    this.mostrar = false;
  }

  ngOnInit(): void {
  }
  onClickMostrar(){
    this.botonPulsado.emit(true);
    this.mostrar= !this.mostrar;
  }
}
