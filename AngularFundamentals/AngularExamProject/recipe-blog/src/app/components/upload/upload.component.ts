import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { Upload } from '../../models/upload.model';
import * as _ from 'lodash'; // to help loop over files more succinctly
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: FileList;
  upload: Upload;
  recipeName:string;
  recipeDescription:string;
  date: string;

  constructor(private uploadService: UploadService, private router:Router) { }

  handleFiles(event) {
    this.files = event.target.files;
  }

  uploadFiles() {
    const filesToUpload = this.files; 

    const filesIdx = _.range(filesToUpload.length); // Arr of numbers
    _.each(filesIdx, (idx) => {
      //console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);
      this.upload.recipeName = this.recipeName;
      this.upload.recipeDescription = this.recipeDescription;
      this.date = this.upload.createdOn.toString();
      this.uploadService.uploadFile(this.upload);
    });

    // this.upload = new Upload(filesToUpload[0]);
    // this.upload.recipeName = this.recipeName
    // this.uploadService.uploadFile(this.upload);
  }
}