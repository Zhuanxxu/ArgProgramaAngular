import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/servicios/file-upload.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor(private datosPorfolio:PortfolioService, private fileUpload: FileUploadService) { }
  descripcion:any;
  edad:any;
  titulo:any;
  ciudad:any;
  provincia:any;
  prueba:any;
  id:any;
  correo:any;
  nombre:any;
  apellido:any;
  tieneFoto:any;
  fotoPerfil:any;
  path="https://thawing-citadel-18441.herokuapp.com/";

  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{

      this.nombre=data.nombre;
      this.id=data.id;
      this.apellido=data.apellido;
      this.descripcion=data.descripcion;
      this.edad=data.edad;
      this.titulo=data.titulo;
      this.ciudad=data.domicilio.localidad.ciudad;
      this.provincia=data.domicilio.localidad.provincia;
      this.correo=data.correo;
      this.fotoPerfil=this.path + data.fileDbs.find((element: { lugar: string; }) => element.lugar == "perfil").path;
      this.tieneFoto = this.fotoPerfil;
      this.fileUpload.tieneFotoFuncion(this.tieneFoto);
 
  
      
    });
    
  }
}
