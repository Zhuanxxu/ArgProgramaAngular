import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-acerca-modal',
  templateUrl: './acerca-modal.component.html',
  styleUrls: ['./acerca-modal.component.css']
})
export class AcercaModalComponent implements OnInit {
  closeResult = '';
  constructor(private modalService: NgbModal,private portfolioService:PortfolioService) { }

  ngOnInit(): void {
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
    //console.log("DATA:" + this.form.value.username);
    //console.log("DATA:" + this.Email);
    this.portfolioService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.portfolioService.setUsername(this.form.value.username);
      this.ruta.navigate(['/portfolio']);
    })
  }

}
