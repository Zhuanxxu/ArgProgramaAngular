import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FileUploadService } from 'src/app/servicios/file-upload.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skill-modals',
  templateUrl: './skill-modals.component.html',
  styleUrls: ['./skill-modals.component.css']
})
export class SkillModalsComponent implements OnInit {
  closeResult = '';
  form:FormGroup;
  message= '';
  progress = 0;
  selectedFiles?: FileList;
  currentFile?: File;
  name = new FormControl('');
  validador = '';
  hardSkills:any[]=[];
  softSkills:any[]=[];

  constructor(private modalService: NgbModal,private portfolioService:PortfolioService,private formBuilder:FormBuilder,private uploadService: FileUploadService) {
    this.form=this.formBuilder.group(
      {
        ubicacion:"",
        descripcion:"",
        porcentajeCompleto:"",
  
      }
      )
   }

  ngOnInit(): void {

    this.portfolioService.obtenerDatos().subscribe(data =>{
      this.hardSkills = data.fileDbs.filter((element: { personaId: number; })=>  element.personaId == 1).filter((value: { lugar: string; })=>  value.lugar.includes("hardskill"));
      this.softSkills = data.fileDbs.filter((element: { personaId: number; })=>  element.personaId == 1).filter((value: { lugar: string; })=>  value.lugar.includes("softskill"));
      
      this.hardSkills.sort(function (a, b) {
        if (a.lugar > b.lugar) {
          return 1;
        }
        if (a.lugar < b.lugar) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      this.softSkills.sort(function (a, b) {
        if (a.lugar > b.lugar) {
          return 1;
        }
        if (a.lugar < b.lugar) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
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
    this.portfolioService.obtenerDatos().subscribe(data=>{

    })
    this.portfolioService.actualizarDatosSkills(this.form.value).subscribe(data=>{

    })
  }

  upload(): void {
    this.progress = 0;
    console.log(this.name.value);
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile, this.name.value).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
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

  selectFile(event: any): void {
    if(this.name.value == ''){

      this.validador = "No se ha seleccionado elemento a modificar"

    } else {

      this.selectedFiles = event.target.files;

    }
  }
}
