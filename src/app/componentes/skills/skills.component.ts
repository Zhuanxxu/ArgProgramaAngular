import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private datosPorfolio:PortfolioService) { }
  skills:any;
  hardSkills:any[]=[];
  softSkills:any[]=[];
  hardPaths:any[]=[];
  softPaths:any[]=[];
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.skills=data.skills;

      data.skills.filter((element: { tipo: string; })=>  element.tipo == "hard").forEach((element: any) => {
        this.hardSkills.push(element)
      });

      data.skills.filter((element: { tipo: string; })=>  element.tipo == "soft").forEach((element: any) => {
        this.softSkills.push(element)
      });

      
      
      data.fileDbs.filter((element: { personaId: number; })=>  element.personaId == 1).filter((value: { lugar: string; })=>  value.lugar.includes("hardskill")).forEach((element: { path: string; }) => {
        this.hardPaths.push(this.datosPorfolio.url + element.path);
      });



      data.fileDbs.filter((element: { personaId: number; })=>  element.personaId == 1).filter((value: { lugar: string; })=>  value.lugar.includes("softskill")).forEach((element: { path: string; }) => {
        this.softPaths.push(this.datosPorfolio.url + element.path);
      });;
      this.softPaths.sort();
      this.hardPaths.sort();
    });

    
  }

}
