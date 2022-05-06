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
  pathFotoPerfil:any;
  ciudad:any;
  provincia:any;
  prueba:any;
  correo:any;
  nombre:any;
  apellido:any;
  tieneFoto:any;
  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    
      //let prueba;
      //prueba = data;
      //console.log("Datos personales: "+ data.nombre);
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.descripcion=data.descripcion;
      this.edad=data.edad;
      this.titulo=data.titulo;
      this.pathFotoPerfil=data.urlFotoPerfil;
      this.ciudad=data.domicilio.localidad.ciudad;
      this.provincia=data.domicilio.localidad.provincia;
      this.correo=data.correo;
      this.tieneFoto=data.fileDbs.id;
    
    });

    this.fileUpload.tieneFotoFuncion(this.tieneFoto);

    
  }
  getCorreo(){
    return this.correo;
  }
}
