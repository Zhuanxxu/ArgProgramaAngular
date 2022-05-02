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
      console.log("Datos personales: "+ data[0].nombre);
      this.descripcion=data[0].descripcion;
      this.edad=data[0].edad;
      this.titulo=data[0].titulo;
      this.pathFotoPerfil=data[0].urlFotoPerfil;
      this.ciudad=data[0].domicilio.localidad.ciudad;
      this.provincia=data[0].domicilio.localidad.provincia;
      this.correo=data[0].correo;

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
