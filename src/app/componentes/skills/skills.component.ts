import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private datosPorfolio:PortfolioService) { }
  pathFoto1:any;
  pathFoto2:any;
  pathFoto3:any;
  pathFoto4:any;
  pathFoto5:any;
  pathFoto6:any;
  titulo1:any;
  titulo2:any;
  titulo3:any;
  titulo4:any;
  titulo5:any;
  titulo6:any;
  porcentaje1:any;
  porcentaje2:any;
  porcentaje3:any;
  porcentaje4:any;
  porcentaje5:any;
  porcentaje6:any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.pathFoto1=data[0].skills[0].urlFoto;
      this.pathFoto2=data[0].skills[1].urlFoto;
      this.pathFoto3=data[0].skills[2].urlFoto;
      this.pathFoto4=data[0].skills[3].urlFoto;
      this.pathFoto5=data[0].skills[4].urlFoto;
      this.pathFoto6=data[0].skills[5].urlFoto;
      this.titulo1=data[0].skills[0].descripcion;
      this.titulo2=data[0].skills[1].descripcion;
      this.titulo3=data[0].skills[2].descripcion;
      this.titulo4=data[0].skills[3].descripcion;
      this.titulo5=data[0].skills[4].descripcion;
      this.titulo6=data[0].skills[5].descripcion;
      this.porcentaje1=data[0].skills[0].porcentajeCompleto;
      this.porcentaje2=data[0].skills[1].porcentajeCompleto;
      this.porcentaje3=data[0].skills[2].porcentajeCompleto;
      this.porcentaje4=data[0].skills[3].porcentajeCompleto;
      this.porcentaje5=data[0].skills[4].porcentajeCompleto;
      this.porcentaje6=data[0].skills[5].porcentajeCompleto;
    });
  }

}
