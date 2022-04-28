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
    
    return this.http.get<any>(this.url+"ver/personas");
  }
  obtenerHello():Observable<any>
  {
    return this.http.get<any>(this.url+"ver/persona/1");
  }
}
