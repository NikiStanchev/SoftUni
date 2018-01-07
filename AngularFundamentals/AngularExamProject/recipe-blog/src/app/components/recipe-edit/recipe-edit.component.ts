import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private recipe = {};
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.recipeService.getRecipe(this.route.snapshot.params['id']).then(r=>{
      this.recipe = r;
      console.log(this.recipe)
    })
    //console.log(this.route.snapshot.params['id'])
  }

}
