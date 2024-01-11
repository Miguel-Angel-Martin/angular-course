import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected= new EventEmitter<Recipe>();
private recipes: Recipe[] = [
    new Recipe('1 Pizza', '1 A pizza is a sliced dough formed from bread dough.', 'https://p1.pxfuel.com/preview/943/14/377/pizza-dough-tomato-macro.jpg'),
    new Recipe('2 Pizza', '2 A pizza is a sliced dough formed from bread dough.', 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg'),
    new Recipe('3 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('4 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('5 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('6 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('7 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('8 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('9 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('10 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('11 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
    new Recipe('12 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg')
  ];
  constructor() { }

  getRecipes(){
    return this.recipes.slice(); //return a copy of this array.
  }
}
