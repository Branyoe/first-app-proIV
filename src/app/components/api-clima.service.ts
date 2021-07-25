import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Clima } from './clima/clima.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiClimaService {
  apiKey:string = '46c85bec2b2d20228dbed48330965684';
  api:string = 'https://api.openweathermap.org';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string):Observable<Clima> {
    const UrlFinal: string = `${this.api}/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}`;
    return this.http.get<Clima>(UrlFinal);
  }
}
