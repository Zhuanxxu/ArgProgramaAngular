import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/servicios/file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AcercaComponent } from '../acerca/acerca.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  path="http://localhost:8080/";
  fileInfos?: Observable<any>;
  aux:any;
  constructor(private uploadService: FileUploadService,private sanitizer: DomSanitizer) { }
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

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,"perfil").subscribe({
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
