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
  recipes: Observable<GalleryRecipe[]>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnChanges(){
    this.recipes = this.recipeService.getRecipes();
  }

}
