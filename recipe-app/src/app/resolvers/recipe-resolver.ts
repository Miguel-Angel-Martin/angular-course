import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { DataStorageService } from '../services/firebase/data-storage.service';
import { RecipeService } from '../services/recipes/recipe.service';
@Injectable({providedIn: 'root'})
export class recipeResolver implements Resolve<Recipe[]> {
  
  constructor(private dataStorageService: DataStorageService,private recipeService: RecipeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    }
    return recipes;
  }
}
