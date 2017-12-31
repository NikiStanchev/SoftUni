import { Component, OnInit, OnChanges } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryRecipe } from '../../models/galleryRecipe.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  private recipeUrl = '';

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  getRecipeUrl(key: string) {
    this.recipeService.getRecipe(key)
      .then(recipe => this.recipeUrl = recipe.url)
      .then(() => console.log(this.recipeUrl));
  }

  ngOnInit() {
    this.getRecipeUrl(this.route.snapshot.params['id']);
    
  }
}