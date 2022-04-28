import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticationService:AutenticacionService, private ruta:Router, private portfolioService:PortfolioService) { 
    this.form=this.formBuilder.group(
      {
        username:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],

        deviceInfo:this.formBuilder.group({
          deviceId:["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          NotificationToken:["67657575eececc34"]
        })



      }
    )
  }

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get('username')
  }
  get Password()
  {
    return this.form.get('password')
  }

  onEnviar(event: Event)
  {
    event.preventDefault;
    //console.log("DATA:" + this.form.value.username);
    //console.log("DATA:" + this.Email);
    this.autenticationService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.portfolioService.setUsername(this.form.value.username);
      this.ruta.navigate(['/portfolio']);
    })
  }
  onCrear()
  {

    console.log("hola")
    this.ruta.navigate(['/crear-cuenta']);
    
  }

}
