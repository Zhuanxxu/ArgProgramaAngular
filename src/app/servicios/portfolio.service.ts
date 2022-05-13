import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaComponent } from '../componentes/acerca/acerca.component';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="https://thawing-citadel-18441.herokuapp.com/"
  username:any;
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>
  { 
    //return this.http.get<any>(this.url+"ver/personas");
    this.username="correo@correo.com"
    console.log("datos: " + this.http.get<any>(this.url+"test/"+this.username));
    return this.http.get<any>(this.url+"test/"+this.username);
    
  }

  setUsername(user:string){
    this.username = user;
    console.log(this.username);
  }

  actualizarDatosPersona(parametros:any):Observable<any>
  {
    let params = new HttpParams();
    //const params = new HttpParams({fromString: 'nombre=agustin'});
    params = params.append("nombre",parametros.nombre)
    params = params.append("apellido",parametros.apellido);
    params = params.append("edad",parametros.edad);
    params = params.append("descripcion", parametros.descripcion);
    params = params.append("titulo", parametros.titulo);
    const prueba = {nombre:"ag"}
    console.log("aca parametros: " + params)
    console.log("aca parametros: " + prueba)
    console.log(this.http.put<any>('https://thawing-citadel-18441.herokuapp.com/personas/editar/1',params))
    return this.http.put<any>('https://thawing-citadel-18441.herokuapp.com/personas/editar/1',params)
  }

  actualizarDatosEducacion(parametros:any):Observable<any>
  {
   
    let params = new HttpParams();
    params = params.append("instituto",parametros.instituto)
    params = params.append("porcentaje_terminacion",parametros.porcentaje_terminacion);
    params = params.append("titulo",parametros.titulo);
    params = params.append("descripcion", parametros.descripcion);
  
    return this.http.put<any>('https://thawing-citadel-18441.herokuapp.com/educacion/editar/'+ parametros.ubicacion,params)
  }

  actualizarDatosSkills(parametros:any):Observable<any>
  {
    let params = new HttpParams();
    params = params.append("descripcion",parametros.descripcion)
    params = params.append("porcentaje_completo",parametros.porcentajeCompleto);
    return this.http.put<any>('https://thawing-citadel-18441.herokuapp.com/skill/editar/'+ parametros.ubicacion,params)
  }

  actualizarDatosProyectos(parametros:any):Observable<any>
  {
    let params = new HttpParams();
    params = params.append("descripcion",parametros.descripcion)
    params = params.append("nombre_proy",parametros.nombreProyecto);
    params = params.append("url",parametros.urlProyecto);
    params = params.append("persona_id","1");
    params = params.append("tecnologia_id", parametros.textoSelector);
    return this.http.put<any>('https://thawing-citadel-18441.herokuapp.com/proyecto/editar/'+ parametros.idProyecto,params)
  }

  verTecnologias():Observable<any>
  {
    return this.http.get<any>(this.url+"ver/tecnologias");
  }

}
