import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FileUploadService } from 'src/app/servicios/file-upload.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion-modal',
  templateUrl: './formacion-modal.component.html',
  styleUrls: ['./formacion-modal.component.css']
})
export class FormacionModalComponent implements OnInit {
  closeResult = '';
  form:FormGroup;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  path="http://localhost:8080/";
  image:any;
  aux:any;
  constructor(private modalService: NgbModal,private portfolioService:PortfolioService,private formBuilder:FormBuilder,private uploadService: FileUploadService) {
 
  this.form=this.formBuilder.group(
    {
      instituto:"",
      porcentaje_terminacion:"",
      titulo:"",
      descripcion:""

    }
    )
  }
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
    this.portfolioService.actualizarDatosEducacion(this.form.value).subscribe(data=>{
      
      //console.log("cambios:" + JSON.stringify(data));
    })
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
      
      
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,"educacion").subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              //this.fileInfos = this.uploadService.getFilesId(1);
              
              //this.aux=JSON.stringify(this.uploadService.getFilesId(1));
              //this.image = this.path + this.aux.id+"/perfil";
              //console.log("esta es " + this.aux);
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }
  

}
