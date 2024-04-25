import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Constants } from 'src/app/config/constants';
import { Recipe } from 'src/app/models/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from './auth.service';
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
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user =>{
        return this.http.get<Recipe[]>(
          Constants.API_URL+Constants.API_RECIPE,
          {
          params: new HttpParams().set('auth', user.token)
          })        
    }),
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
