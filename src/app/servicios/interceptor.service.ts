import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionServicio:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("comienzo intercept ver si llega");
    var currentUser=this.autenticacionServicio.UsuarioAutenticado;
    if(currentUser && currentUser.token)
    {
      req=req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + currentUser.token)
      });
    }
    console.log("Interceptor esta corriendo"+ JSON.stringify(currentUser.token));
    return next.handle(req);
  }
}
