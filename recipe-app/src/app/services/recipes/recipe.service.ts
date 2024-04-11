import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from '../shopping/shopping-list-service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  /* recipeSelected= new EventEmitter<Recipe>(); */
  recipesChanged = new Subject<Recipe[]>();
private recipes: Recipe[] = [
  new Recipe('Pizza', 'A peperoni pizza with mozzarella cheese.', 'https://p1.pxfuel.com/preview/943/14/377/pizza-dough-tomato-macro.jpg', [new Ingredient('Cheese',1), new Ingredient('Peperoni',20)]),
  new Recipe('Burger', 'Cheese burger of cow meet and french fries.', 'https://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2019/09/lacalle.jpg', [new Ingredient('Meat', 1), new Ingredient('Cheese', 2), new Ingredient('Lettuce', 3), new Ingredient('Buns',2)]),
 
  ];
  constructor( private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice(); //return a copy of this array.
  }
  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]):void {
      this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
