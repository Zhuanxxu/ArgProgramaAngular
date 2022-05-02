import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaComponent } from '../componentes/acerca/acerca.component';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/"
  username:any;
  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>
  { 
    
    return this.http.get<any>(this.url+"ver/personas");
  }
  obtenerHello():Observable<any>
  {
    return this.http.get<any>(this.url+"test/"+this.username);
  }
  setUsername(user:string){
    this.username = user;
    console.log(this.username);
  }
}
