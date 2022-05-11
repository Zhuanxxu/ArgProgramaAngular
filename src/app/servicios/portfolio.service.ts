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
  softSkills:any[]=[];
  hardSkills:any[]=[];
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
    console.log(this.http.put<any>('http://localhost:8080/personas/editar/1',params))
    return this.http.put<any>('http://localhost:8080/personas/editar/1',params)
  }

  actualizarDatosEducacion(parametros:any):Observable<any>
  {
   
    let params = new HttpParams();
    //const params = new HttpParams({fromString: 'nombre=agustin'});
    params = params.append("instituto",parametros.instituto)
    params = params.append("porcentaje_terminacion",parametros.porcentaje_terminacion);
    params = params.append("titulo",parametros.titulo);
    params = params.append("descripcion", parametros.descripcion);
    //params = params.append("persona_id", parametros.persona_id);
  
    console.log(this.http.put<any>('http://localhost:8080/educacion/editar/'+ parametros.ubicacion,params))
    return this.http.put<any>('http://localhost:8080/educacion/editar/'+ parametros.ubicacion,params)
  }

  actualizarDatosSkills(parametros:any):Observable<any>
  {
    let params = new HttpParams();
    //const params = new HttpParams({fromString: 'nombre=agustin'});
    params = params.append("descripcion",parametros.descripcion)
    params = params.append("porcentaje_completo",parametros.porcentajeCompleto);
    return this.http.put<any>('http://localhost:8080/skill/editar/'+ parametros.ubicacion,params)
  }

  setObjetoHardSkills(hard:any[]): void {
    this.hardSkills = hard;
  }

  setObjetoSoftSkills(soft:any[]): void {
    this.softSkills = soft;
  }

  getObjetosHardSkills():any[]{
    return this.hardSkills;
  }

  getObjetosSoftSkills():any[]{
    return this.softSkills;
  }

  actualizarDatosProyectos(parametros:any):Observable<any>
  {
    let params = new HttpParams();
    //const params = new HttpParams({fromString: 'nombre=agustin'});
    params = params.append("descripcion",parametros.descripcion)
    params = params.append("nombre_proy",parametros.nombreProyecto);
    params = params.append("url",parametros.urlProyecto);
    params = params.append("persona_id","1");
    params = params.append("tecnologia_id", parametros.textoSelector);
    return this.http.put<any>('http://localhost:8080/proyecto/editar/'+ parametros.idProyecto,params)
  }

  verTecnologias():Observable<any>
  {
    return this.http.get<any>(this.url+"ver/tecnologias");
  }

}
