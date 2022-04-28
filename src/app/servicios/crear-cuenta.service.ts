import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearCuentaService {
  url="http://localhost:8080/register"

  constructor(private http:HttpClient) {
    console.log("El servicio de crear cuenta esta corriendo");
   }
   CrearCuenta(credenciales:any){
    console.log(credenciales);
    return this.http.post(this.url,credenciales).pipe(map(data=>{

      return data;
    })) 
   }
}
