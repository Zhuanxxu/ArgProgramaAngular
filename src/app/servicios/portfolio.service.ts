import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaComponent } from '../componentes/acerca/acerca.component';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/"
  username:any;
  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>
  { 
    //return this.http.get<any>(this.url+"ver/personas");
    this.username="correo@correo.com"
    console.log("datos: " + this.http.get<any>(this.url+"test/"+this.username));
    return this.http.get<any>(this.url+"test/"+this.username);
    
  }
  obtenerHello():Observable<any>
  {
    
    
    return this.http.get<any>(this.url+"test/"+this.username);
 
  }
  setUsername(user:string){
    this.username = user;
    console.log(this.username);
  }

  actualizarDatos(parametros:any):Observable<any>
  {
    const params = new HttpParams({fromString: 'nombre=agustin'});
    const prueba = {nombre:"agu"}
    console.log(this.http.put<any>('http://localhost:8080/personas/editar/1',params))
    return this.http.put<any>('http://localhost:8080/personas/editar/1',params)
  }
}
