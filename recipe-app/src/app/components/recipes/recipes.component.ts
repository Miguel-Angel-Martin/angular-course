import { Component, OnInit } from '@angular/core';
/* import { Recipe } from '../../models/recipe.model'; */
/* import { RecipeService } from '../../services/recipes/recipe.service'; */
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
 /*  providers: [RecipeService], */
})
export class RecipesComponent implements OnInit {
  /* selectedRecipe: Recipe; */
  ngOnInit(): void {
   /*  this.recipeService.recipeSelected.subscribe((recipe:Recipe) => {
        this.selectedRecipe = recipe;
    }); */
      
  }
  constructor(/* private recipeService: RecipeService */){}

  

}
