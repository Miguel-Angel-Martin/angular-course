import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 /*  ingredientsChanged = new EventEmitter<Ingredient[]>(); */
  ingredientsChanged = new Subject<Ingredient[]>();
  startingEditing = new Subject<number>();
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
    /* this.ingredientsChanged.emit(this.ingredients.slice()); */
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredient (index: number){
    return this.ingredients[index];
  }
  addIngredientsFromRecipe(ingredients: Ingredient[]): void {
    /*  for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    } */ 
    //NOTE: this code generate a lot of events it is too bad for big amount of ingredients.
  
    this.ingredients.push(...ingredients);
   /*  this.ingredientsChanged.emit(this.ingredients.slice(0)); */
    this.ingredientsChanged.next(this.ingredients.slice(0));
  }
  updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
