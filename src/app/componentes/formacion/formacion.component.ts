import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  fotoLogo1:any;
  titulo1:any;
  fechaInicio1:any;
  fechaFin1:any;
  descripcion1:any;
  instituto1:any;
  fotoLogo2:any;
  titulo2:any;
  fechaInicio2:any;
  fechaFin2:any;
  descripcion2:any;
  instituto2:any;
  fotoLogo3:any;
  titulo3:any;
  fechaInicio3:any;
  fechaFin3:any;
  descripcion3:any;
  instituto3:any;
  formaciones:any;
  fotosEducaciones:any;
  alls:any;
  path1:any;
  path2:any;
  path3:any;
  pathPrueba:any[] = [];
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.alls=data;
      this.fotosEducaciones=data.fileDbs
      
      for (let i = 1; i <= 3; i++) {
        this.pathPrueba.push(this.datosPorfolio.url +  data.fileDbs.filter((element: { personaId: number; })=>  element.personaId == 1).find(
          (        element: { lugar: string; }) => element.lugar == "Educacion " + i.toString()
          ).path);
      }
      console.log(this.pathPrueba);
      data.fileDbs.forEach((element: { path: any; }) => {
        console.log(element.path);
      });
      console.log(data.fileDbs.filter((element: { personaId: number; })=>  element.personaId == 1).find(
        (        element: { lugar: string; }) => element.lugar == "Educacion 1"
        ));
      console.log(typeof data.fileDbs[0].personaId);
      this.path2 = "http://localhost:8080/" + data.fileDbs[4].path
      this.path3 = "http://localhost:8080/" + data.fileDbs[3].path
      this.formaciones=data.educacion;
      this.titulo1=data.educacion[0].titulo;
      this.fechaInicio1=data.educacion[0].fechaIni.substring(0,4);
      this.fechaFin1=data.educacion[0].fechaFin.substring(0,4);
      this.descripcion1=data.educacion[0].descripcion;
      this.instituto1=data.educacion[0].instituto;
      
      this.fotoLogo2=data.educacion[1].urlFoto;
      this.titulo2=data.educacion[1].titulo;
      this.fechaInicio2=data.educacion[1].fechaIni.substring(0,4);
      this.fechaFin2=data.educacion[1].fechaFin.substring(0,4);
      this.descripcion2=data.educacion[1].descripcion;
      this.instituto2=data.educacion[1].instituto;

      this.fotoLogo3=data.educacion[2].urlFoto;
      this.titulo3=data.educacion[2].titulo;
      this.fechaInicio3=data.educacion[2].fechaIni.substring(0,4);
      this.fechaFin3=data.educacion[2].fechaFin.substring(0,4);
      this.descripcion3=data.educacion[2].descripcion;
      this.instituto3=data.educacion[2].instituto;

    });
  }

}
