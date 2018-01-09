import { Component, OnInit, OnChanges } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { GalleryRecipe } from '../../models/galleryRecipe.model';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  recipeKeys: {};
  allRecipes: {};
  recipe: {};
  recipes:Object[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.loadTheHomePage();
  
  }

  ngOnChanges(){
    this.loadTheHomePage();
  }

  loadTheHomePage(){
    this.recipeService.getRecipes()
    .then((r)=>{
      this.recipeKeys = Object.keys(r);
      this.allRecipes = r;

      for(let idx in this.recipeKeys){
        this.recipe = this.allRecipes[this.recipeKeys[idx]];
        let rId = this.recipeKeys[idx];
        let imageKey = this.recipe['imageKeys'][0];
        let name = this.recipe['recipeName'];
        let date = this.recipe['createdDate'];
        let author = this.recipe['createdBy'];
        let obj = {
          id:rId,
          recipeName:name,
          imgUrl:'',
          createdDate: date,
          createdBy: author
        }
        this.recipeService.getImage(imageKey).then(img=>{
          obj.imgUrl = img['url'];
        })
        this.recipes.push(obj);
      }
    });
  }

}
