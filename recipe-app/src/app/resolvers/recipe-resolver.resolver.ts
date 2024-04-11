import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { RecipeService } from '../services/recipes/recipe.service';
export class recipeResolverResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {}
  resolve() {
    return this.recipeService.getRecipe();
  }
}
