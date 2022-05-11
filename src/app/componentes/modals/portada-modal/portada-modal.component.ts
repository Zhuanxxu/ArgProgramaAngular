import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FileUploadService } from 'src/app/servicios/file-upload.service';

@Component({
  selector: 'app-portada-modal',
  templateUrl: './portada-modal.component.html',
  styleUrls: ['./portada-modal.component.css']
})
export class PortadaModalComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  path="https://thawing-citadel-18441.herokuapp.com/";
  aux:any;
  closeResult = '';
  constructor(private uploadService: FileUploadService,private sanitizer: DomSanitizer,private modalService: NgbModal) { }
  image: any;
  ngOnInit(): void {

    /*console.log(this.acerca.tieneFoto)
    this.uploadService.getFilesId(1).subscribe(data =>{
      this.image = this.path + "imagen/" + data.id;

    })*/
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
      
      
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
  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,"portada").subscribe({
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
