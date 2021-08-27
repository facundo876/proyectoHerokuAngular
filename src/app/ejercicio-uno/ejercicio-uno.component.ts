import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../clases/usuarios';

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css']
})
export class EjercicioUnoComponent implements OnInit {
  constructor() {
    this.myUsuario = new Usuarios("Facundo", "Arce");
    
  }
  ngOnInit(): void {}

  saludar(){console.log("Hola mundo!")};

  myUsuario:Usuarios;


  edadUno:number = 0;
  edadDos:number = 0;
  resultadoSuma = 0;
  promedioEdades = 0;
  SumarEdades(){
     this.resultadoSuma = this.edadUno  + this.edadDos ;
  }
  PromedioEdades(){
    let edad = 
    this.promedioEdades = (this.edadUno  + this.edadDos)/2;
  }
}
