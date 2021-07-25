import { Component } from '@angular/core';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent  {
  cantidad: number = 0;
  total: number = 0;
  monedas: string[] = ["MX", "USD", "EUR"];
  tengo: string = 'MX';
  quiero: string = 'USD';


  constructor() {
    
  }

  calcular () {
    if(this.tengo === this.quiero){
      this.total = this.cantidad;
    }else if(this.tengo === "MX" && this.quiero === "USD"){
      this.total = this.cantidad * 0.049;
    }else if(this.tengo === "MX" && this.quiero === "EUR"){
      this.total = this.cantidad * 0.041;
    }else if(this.tengo === "USD" && this.quiero === "MX"){
      this.total = this.cantidad * 20.39;
    }else if(this.tengo === "USD" && this.quiero === "EUR"){
      this.total = this.cantidad * 0.83;
    }else if(this.tengo === "EUR" && this.quiero === "MX"){
      this.total = this.cantidad * 25.4;
    }else if(this.tengo === "EUR" && this.quiero === "USD"){
      this.total = this.cantidad * 1.7;
    }
    
  }
}
