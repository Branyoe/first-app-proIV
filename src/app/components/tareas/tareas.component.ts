import { Component } from '@angular/core';

interface Tarea{
  id: number,
  hecho:boolean,
  description:string
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  newTarea: string = ''

  tareas:Tarea[] = []

  constructor() {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]')
  }
  
  addTarea = ()=>{
    if(this.newTarea.trim().length <= 0) return;
    this.tareas.push(
      {
        id: new Date().getTime(),
        hecho: false,
        description: this.newTarea
      }
    );
    this.newTarea = '';
    localStorage.setItem('tareas',JSON.stringify(this.tareas));
  }

  changeHecho = (index:number) => {
    this.tareas[index].hecho = !this.tareas[index].hecho;
    localStorage.setItem('tareas',JSON.stringify(this.tareas));
  }

  deleteTarea = (index: number) => {
    this.tareas.splice(index, 1);
    localStorage.setItem('tareas',JSON.stringify(this.tareas));
  }

  
}