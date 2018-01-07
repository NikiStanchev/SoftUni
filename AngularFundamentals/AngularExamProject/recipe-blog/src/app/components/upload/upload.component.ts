import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { RecipeService } from '../../services/recipe.service';

import { Upload } from '../../models/upload.model';
import { Recipe } from '../../models/recipe.model';

import * as _ from 'lodash'; // to help loop over files more succinctly
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: FileList;
  //upload: Upload;
  recipe: Recipe;
  recipeName:string;
  recipeDescriptionFirst:string;
  recipeDescriptionSecond:string;
  recipeDescriptionThird:string;
  recipeTypes = ['Breakfast', 'Dessert', 'Drink'];
  recipeType: string = 'Breakfast';
  timeToMake: string;
  hours:number;
  minutes:number;
  products:string;

  constructor(private recipeService: RecipeService, private uploadService: UploadService, private router:Router) { }

  selectChangeHandler(event:any){
    this.recipeType = event.target.value;
  }

  handleFiles(event) {
    this.files = event.target.files;
  }

  uploadFiles() {
    const filesToUpload = this.files; 
    this.recipe = new Recipe();
    this.recipe.recipeName = this.recipeName;
    this.recipe.recipeDescriptionFirst = this.recipeDescriptionFirst;
    this.recipe.recipeDescriptionSecond = this.recipeDescriptionSecond;
    this.recipe.recipeDescriptionThird = this.recipeDescriptionThird;
    this.recipe.recipeType = this.recipeType;
    this.recipe.timeToMake = String(this.hours) + ' : ' + String(this.minutes);
    this.recipe.products = this.products;
    this.recipe.createdBy = this.recipeService.getEmail();

    //console.log(this.recipe);

    this.uploadService.uploadFile(filesToUpload, this.recipe);

    // Save multiple images
    // const filesIdx = _.range(filesToUpload.length); // Arr of numbers
    // _.each(filesIdx, (idx) => {
    //   //console.log(filesToUpload[idx]);
    //   //this.upload = new Upload(filesToUpload[idx]);
    //   this.uploadService.uploadFile(filesToUpload, this.recipe);
    // });

    // Save single image
    //this.upload = new Upload(filesToUpload[0]);
    //this.upload.recipeName = this.recipeName;
    //this.uploadService.uploadFile(this.upload, this.recipe);
  }
}