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
  recipe: Recipe;
  recipeName:string;
  recipeDescriptionFirst:string;
  recipeDescriptionSecond:string;
  recipeDescriptionThird:string;
  recipeTypes = ['Breakfast', 'Dessert', 'Drink'];
  recipeType: string = 'Breakfast';
  timeToMake: string;
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
    this.recipe.timeToMake = this.timeToMake;
    this.recipe.products = this.products;
    this.recipe.createdBy = this.recipeService.getEmail();
    this.uploadService.uploadFile(filesToUpload, this.recipe);

  }
}