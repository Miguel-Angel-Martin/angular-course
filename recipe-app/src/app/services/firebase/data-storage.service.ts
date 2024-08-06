import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Constants } from 'src/app/config/constants';
import { Recipe } from 'src/app/models/recipe.model';
import {  map,  tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {  }
  storeRecipe(){
      const recipes= this.recipeService.getRecipes();
      this.http.put(Constants.API_URL+Constants.API_RECIPE, recipes).subscribe(response => {
        console.log(response);
      })
  }
  fetchRecipes(){    
    return this.http.get<Recipe[]>(
        Constants.API_URL+Constants.API_RECIPE,                 
    ).pipe(
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe, 
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      })
    }),tap(recipes =>{
      this.recipeService.setRecipes(recipes);
    }))
  }
}
