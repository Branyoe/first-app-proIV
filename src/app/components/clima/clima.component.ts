import { Component } from '@angular/core';
import { ApiClimaService } from '../api-clima.service';
import { Clima } from './clima.interface';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent {

  inpTXT:string = '';
  clima: Clima[] = [];
  loading:boolean = false;
  error: boolean = false;

  constructor(private climaService: ApiClimaService ) { }

  buscarClima(){
    if(this.inpTXT.length > 2) {
      this.clima = [];
      this.loading = true;
      this.error = false;
      this.climaService.getClima(this.inpTXT).subscribe(( c ) => {
        this.clima.push(c);
        this.loading = false;
      }, (_) => {
        this.loading = false;
        this.error = true;
      });
    }
  }

  verfBqd(e: InputEventInit){
    if (e.inputType === 'deleteContentBackward') {
      this.error = false;
      this.clima = [];
    }
  }

}
