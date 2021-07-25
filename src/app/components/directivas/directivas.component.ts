import { Component } from '@angular/core';

interface Datos{
  cuenta: number,
  nombre: string,
  area: string
}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html'
})

export class DirectivasComponent{
  directivas:string[] = ['ngFor', 'ngIf', 'ngStyle', 'ngClass'];

  estudiantes: Datos[] = [
    {
      cuenta: 20185355,
      nombre: 'Brandon',
      area: 'programación'
    },
    {
      cuenta: 20185350,
      nombre: 'Pamela',
      area: 'contabilidad'
    },
    {
      cuenta: 20185658,
      nombre: 'Daniel',
      area: 'programación'
    },
    {
      cuenta: 20184563,
      nombre: 'Iván',
      area: 'programación'
    }
  ]

  constructor() { }
}

