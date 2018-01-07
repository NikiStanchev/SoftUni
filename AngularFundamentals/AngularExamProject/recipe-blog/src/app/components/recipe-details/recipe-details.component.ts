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

  private recipeId:string;
  private firstImg:string;
  private secondImg:string;
  private thirdImg:string;
  private recipeImages:string[] = [];
  private recipeName:string;
  private recipeDate:string;
  private recipeType:string;
  private recipeProducts:string;
  private recipeDescriptionFirst:string;
  private recipeDescriptionSecond:string;
  private recipeDescriptionThird:string;
  private createdBy:string;
  private recipeTime:string;



  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  getRecipeUrl(key: string) {
    this.recipeService.getRecipe(key).then(rec=>{
      this.createdBy = rec.createdBy;
      this.recipeName = rec.recipeName;
      this.recipeDate = rec.createdDate;
      this.recipeType = rec.recipeType;
      this.recipeProducts = rec.products;
      this.recipeDescriptionFirst = rec.recipeDescriptionFirst;
      this.recipeDescriptionSecond = rec.recipeDescriptionSecond;
      this.recipeDescriptionThird = rec.recipeDescriptionThird;
      this.createdBy = rec.createdBy;
      this.recipeTime = rec.timeToMake;
      this.recipeId = this.route.snapshot.params['id'];
      //console.log(this.route.snapshot.params['id'])
      for(let key in rec.imageKeys){
        this.recipeService.getImage(rec.imageKeys[key]).then(img=>{
          if(Number(key) === 0){
            this.firstImg = img.url;
          }
          if(Number(key) === 1){
            this.secondImg = img.url;
          }
          if(Number(key) === 2){
            this.thirdImg = img.url;
          }
          if(Number(key) > 2){
            this.recipeImages.push(img.url);
          }
        });
      }

      // this.recipeService.getImage(rec['imageKeys'][0]).then(el=>{
      //   this.recipeUrl = el.url
      // })
    })
    // this.recipeService.getRecipe(key)
    //   .then(recipe => this.recipeUrl = recipe.url)
    //   .then(() => console.log(this.recipeUrl));
  }

  ngOnInit() {
    //console.log(this.route.snapshot.params['id'])
    this.getRecipeUrl(this.route.snapshot.params['id']);
    
  }

  deleteRec(){
    this.recipeService.deleteRecipe(this.recipeName, this.route.snapshot.params['id']);
  }
}