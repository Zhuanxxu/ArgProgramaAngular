import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from 'src/app/servicios/portfolio.service';



@Component({
  selector: 'app-acerca-modal',
  templateUrl: './acerca-modal.component.html',
  styleUrls: ['./acerca-modal.component.css']
})
export class AcercaModalComponent implements OnInit {
  closeResult = '';
  form:FormGroup;

  constructor(private modalService: NgbModal,private portfolioService:PortfolioService,private formBuilder:FormBuilder) {
 
    this.form=this.formBuilder.group(
    {
      edad:"",
      titulo:"",
      nombre:"",
      apellido:"",
      descripcion:"",

    })

  }

  ngOnInit(): void {}

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
    this.portfolioService.actualizarDatosPersona(this.form.value).subscribe(data=>{
 
    })
  }
}
