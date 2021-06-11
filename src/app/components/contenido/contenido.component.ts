import {Component} from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html'
})

export class ContenidoComponent {
  title:string = 'first-app';
  placeHolderValue:string = 'Escribe tu nombre';
  disabled:boolean = false;
  texto:string = 'Texto de prueba';
  nombreInput:string = '';

  // constructor(){
  //   // setTimeout(()=>{
  //   //   this.placeHolderValue = 'Cambiando texto';
  //   //   this.disabled = false;
  //   // },5000)
  // }
  cambiarTexto(){
    this.texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sed nesciunt quod quos doloremque culpa laudantium eos ipsa, ratione, placeat reiciendis voluptate temporibus aliquid tempora dolores nihil sunt consequatur facilis.'
  }
}