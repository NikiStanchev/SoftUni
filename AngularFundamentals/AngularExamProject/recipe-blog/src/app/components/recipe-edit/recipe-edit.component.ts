import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private products:string;
  private recipeDescriptionFirst:string;
  private recipeDescriptionSecond:string;
  private recipeDescriptionThird:string;
  private timeToMake:string;
  private recipe = {};
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.recipeService.getRecipe(this.route.snapshot.params['id']).then(r=>{
      this.products = r.products;
      this.timeToMake = r.timeToMake;
      this.recipeDescriptionFirst = r.recipeDescriptionFirst;
      this.recipeDescriptionSecond = r.recipeDescriptionSecond;
      this.recipeDescriptionThird = r.recipeDescriptionThird;
      this.recipe = r;
     
    })
  }

  edit(){
    this.recipe['timeToMake'] = this.timeToMake;
    this.recipe['products'] = this.products;
    this.recipe['recipeDescriptionFirst'] = this.recipeDescriptionFirst;
    this.recipe['recipeDescriptionSecond'] = this.recipeDescriptionSecond;
    this.recipe['recipeDescriptionThird'] = this.recipeDescriptionThird;
    
    this.recipeService.editRecipe(this.route.snapshot.params['id'], this.recipe);
  }
}
