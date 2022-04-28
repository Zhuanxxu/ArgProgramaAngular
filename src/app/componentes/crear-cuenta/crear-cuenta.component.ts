import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearCuentaService } from 'src/app/servicios/crear-cuenta.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private ruta:Router, private crearCuentaService: CrearCuentaService) { 
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
  form:FormGroup;

  get Email()
  {
    return this.form.get('username')
  }
  get Password()
  {
    return this.form.get('password')
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.crearCuentaService.CrearCuenta(this.form.value).subscribe(data=>{
  
      if(JSON.parse(JSON.stringify(data)).username===this.form.value.username && this.form.value.username!="" && this.form.value.password!="") {
        this.ruta.navigate(['/iniciar-sesion']);
      }
    })
  }
}
