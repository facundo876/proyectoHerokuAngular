import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../clases/usuarios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myUsuario:Usuarios;
  constructor() {
    this.myUsuario = new Usuarios("Facundo", "Arce");
   }

  ngOnInit(): void {
  }

}
