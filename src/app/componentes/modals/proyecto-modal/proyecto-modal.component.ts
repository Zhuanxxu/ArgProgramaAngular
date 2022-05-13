import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.css']
})
export class ProyectoModalComponent implements OnInit {

  form:FormGroup;
  closeResult = '';
  proyectos:any;
  tecnologias:any[] = new Array;

  constructor(private modalService: NgbModal,private portfolioService:PortfolioService,private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group(
      {
        descripcion:"",
        urlProyecto:"",
        nombreProyecto:"",
        idProyecto:"",
        textoSelector:""
      }
      )
    }
  

  ngOnInit(): void {

    this.portfolioService.obtenerDatos().subscribe(data =>{
      this.proyectos=data.proyectos;
    
    });

    this.portfolioService.verTecnologias().subscribe(data =>{

      this.tecnologias = data;
    })
  
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onEnviar(event: Event)
  {
    event.preventDefault;

    this.portfolioService.actualizarDatosProyectos(this.form.value).subscribe(data=>{
      
    })
  }

}
