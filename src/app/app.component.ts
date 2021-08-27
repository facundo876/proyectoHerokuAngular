import { Component } from '@angular/core';
import { Usuarios } from './clases/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimerProyecto';
  saludar(){console.log("Hola mundo!")};

  myUsuario:Usuarios;

  constructor() {
    this.myUsuario = new Usuarios();
    
  }
  edadUno = "";
  edadDos = "";
  resultadoSuma = 0;
  promedioEdades = 0;
  SumarEdades(){
     this.resultadoSuma = parseInt(this.edadUno)  +parseInt(this.edadDos) ;
  }
  PromedioEdades(){
    let edad = 
    this.promedioEdades = (parseInt(this.edadUno)  + parseInt(this.edadDos))/2;
  }
}
