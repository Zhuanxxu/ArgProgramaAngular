import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(private datosPorfolio:PortfolioService) { }
  pathFotoPortada:any;
  path="http://localhost:8080/";
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    
      //this.pathFotoPortada=data.urlFotoPortada;
      this.pathFotoPortada=this.path + data.fileDbs.find((element: { lugar: string; }) => element.lugar == "portada").path;
    });
  }

}
