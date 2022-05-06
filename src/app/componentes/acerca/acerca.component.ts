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
  id:any;
  id2:any;
  correo:any;
  nombre:any;
  apellido:any;
  tieneFoto:any;
  fotoPerfil:any;
  path="http://localhost:8080/";
  lista:any;
  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    
      //let prueba;
      //prueba = data;
      //console.log("Datos personales: "+ data.nombre);
      this.nombre=data.nombre;
      this.id=data.id;
      this.apellido=data.apellido;
      this.descripcion=data.descripcion;
      this.edad=data.edad;
      this.titulo=data.titulo;
      this.pathFotoPerfil=data.urlFotoPerfil;
      this.ciudad=data.domicilio.localidad.ciudad;
      this.provincia=data.domicilio.localidad.provincia;
      this.correo=data.correo;
      this.fotoPerfil=this.path + data.fileDbs.find((element: { lugar: string; }) => element.lugar == "perfil").path;
      this.tieneFoto = this.fotoPerfil;
      this.fileUpload.tieneFotoFuncion(this.tieneFoto);
      //this.fotoPerfil= this.path +"filesUnico/"+this.id + "/perfil";
  
      
    });
    /*console.log("holaaaaaaaaaaaa" +this.id)
    this.fileUpload.getFiles().subscribe(data2 =>{
      
      let lista: any[] = [];
      data2.forEach(function (value: any){
        lista.push(value);
      
      });
      lista.forEach(item =>{
        
        if(item.id==this.id && item.lugar=="perfil"){
          this.fotoPerfil = item.url;
          
        }
      })
    })*/
    
  }
  getCorreo(){
    return this.correo;
  }

  getPrueba(){
    this.fileUpload.getFilesId(this.id,"perfil").subscribe(data =>{
      //this.fotoPerfil = this.path + "imagen/" + data.id;
      debugger
      console.log("typo:" + data);
      this.fotoPerfil=data;
      console.log("hola " + data);
      
    })
  }
}
