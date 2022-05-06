import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080';
  tieneFoto:any;
  hola:any;
  constructor(private http: HttpClient) { }
  
  tieneFotoFuncion(tiene:any){
    this.tieneFoto=tiene;
    
    
  
    console.log(typeof this.tieneFoto == "undefined");
    console.log(this.tieneFoto == "undefined");
  }

  upload(file: File): Observable<HttpEvent<any>> {

    
    if(typeof this.tieneFoto == "undefined"){
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload/1`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }else{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('PUT', `${this.baseUrl}/editarfoto/1`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
    
  }
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
  getFilesId(id: any): Observable<any> {
    debugger
    console.log("que sos" + id)
    console.log(`${this.baseUrl}/filesUnico/`+id+"/"+"perfil");
    console.log("devuelve: " + this.http.get<any>(`${this.baseUrl}/filesUnico/`+id+"/"+"perfil"));
    return this.http.get<any>(`${this.baseUrl}/filesUnico/`+id+"/"+"perfil");
  }
}
