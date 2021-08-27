import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { EjercicioUnoComponent } from './ejercicio-uno/ejercicio-uno.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ejercicioUno', component: EjercicioUnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
