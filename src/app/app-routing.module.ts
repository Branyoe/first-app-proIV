import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { HomeComponent } from './components/home/home.component';
import { TareasComponent } from './components/tareas/tareas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contenido',
    component: ContenidoComponent
  },
  {
    path: 'directivas',
    component: DirectivasComponent
  },
  {
    path: 'tareas',
    component: TareasComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

