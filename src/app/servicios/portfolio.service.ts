import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/"
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>
  { 
    console.log(this.http.get<any>(this.url+"ver/personas"));
    return this.http.get<any>(this.url+"ver/personas");
  }
}
