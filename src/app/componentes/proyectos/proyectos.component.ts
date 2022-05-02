import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private datosPorfolio:PortfolioService) { }
  titulo1:any;
  titulo2:any;
  titulo3:any;
  descripcion1:any;
  descripcion2:any;
  descripcion3:any;
  link1:any;
  link2:any;
  link3:any;
  tecnologias1:any;
  tecnologias2:any;
  tecnologias3:any;
  proyectos:any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.proyectos=data.proyectos;
      this.titulo1=data.proyectos[0].nombreProy;
      this.titulo2=data.proyectos[1].nombreProy;
      this.titulo3=data.proyectos[2].nombreProy;
      this.descripcion1=data.proyectos[0].descripcion;
      this.descripcion2=data.proyectos[1].descripcion;
      this.descripcion3=data.proyectos[2].descripcion;
      this.link1=data.proyectos[0].url;
      this.link2=data.proyectos[1].url;
      this.link3=data.proyectos[2].url;
      this.tecnologias1=data.proyectos[0].tecnologiaProyectos;
      this.tecnologias2=data.proyectos[1].tecnologiaProyectos;
      this.tecnologias3=data.proyectos[2].tecnologiaProyectos;
    });
  }

}
