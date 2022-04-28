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
  pathFoto:any;
  prueba:any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    
      //let prueba;
      //prueba = data;
      console.log("Datos personales"+ data[0].nombre);
      this.descripcion=data[0].descripcion;
      this.edad=data[0].edad;
      this.titulo=data[0].titulo;
      this.pathFoto=data[0].pathFoto;
    
    });
    this.datosPorfolio.obtenerHello().subscribe(data=>{
    this.prueba=data;
    console.log(this.prueba);
    console.log(typeof this.prueba);


    });
    
  }

}
