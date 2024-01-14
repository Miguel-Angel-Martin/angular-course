import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 5),
    new Ingredient('Cucumbers', 2),
    new Ingredient('Bread', 2)
  ];
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredientsFromRecipe(ingredients: Ingredient[]): void {
    /*  for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    } */ 
    //NOTE: this code generate a lot of events it is too bad for big amount of ingredients.
  
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice(0));
  }
}
