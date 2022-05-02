import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor(private datosPorfolio:PortfolioService) { }
  descripcion:any;
  edad:any;
  titulo:any;
  pathFotoPerfil:any;
  ciudad:any;
  provincia:any;
  prueba:any;
  correo:any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    
      //let prueba;
      //prueba = data;
      console.log("Datos personales: "+ data.nombre);
      this.descripcion=data.descripcion;
      this.edad=data.edad;
      this.titulo=data.titulo;
      this.pathFotoPerfil=data.urlFotoPerfil;
      this.ciudad=data.domicilio.localidad.ciudad;
      this.provincia=data.domicilio.localidad.provincia;
      this.correo=data.correo;

    });
    this.datosPorfolio.obtenerHello().subscribe(data=>{
    this.prueba=data;
    console.log(this.prueba);
    console.log(typeof this.prueba);
    });
    
  }
  getCorreo(){
    return this.correo;
  }
}
