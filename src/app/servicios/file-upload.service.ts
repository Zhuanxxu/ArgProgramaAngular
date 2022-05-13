import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'https://thawing-citadel-18441.herokuapp.com';
  tieneFoto:any;
  hola:any;
  tieneFotoEducacion:any;
  constructor(private http: HttpClient) { }
  
  tieneFotoFuncion(tiene:any){
    this.tieneFoto=tiene;
  }

  upload(file: File,lugar: string): Observable<HttpEvent<any>> {


      const formData: FormData = new FormData();
      formData.append('file', file);
      formData.append('lugar',lugar);
      const req = new HttpRequest('PUT', `${this.baseUrl}/editarfoto/1`, formData, {
        reportProgress: true,
        responseType: 'json'
      });

      return this.http.request(req);
  }

  uploadFotoEducacion(file: File,lugar: string): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('lugar',lugar);
    const req = new HttpRequest('PUT', `${this.baseUrl}/editarfoto/1`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
    
  }

  uploadFotoSkills(file: File,lugar: string): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('lugar',lugar);
    const req = new HttpRequest('PUT', `${this.baseUrl}/editarfoto/1`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
    
  }


}
