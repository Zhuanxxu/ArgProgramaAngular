import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  formaciones:any;
  pathPrueba:any[] = [];

  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{


      
      for (let i = 1; i <= 3; i++) {
        this.pathPrueba.push(this.datosPorfolio.url +  data.fileDbs.filter((element: { personaId: number; })=>  element.personaId == 1).find(
          (        element: { lugar: string; }) => element.lugar == "Educacion " + i.toString()
          ).path);
      }

      this.formaciones=data.educacion;

    });
  }

}
