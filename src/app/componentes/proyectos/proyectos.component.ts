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
      
    });
  }

}
