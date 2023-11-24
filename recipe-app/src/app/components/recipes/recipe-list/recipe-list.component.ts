import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('1 Pizza', '1 A pizza is a sliced dough formed from bread dough.', 'https://p1.pxfuel.com/preview/943/14/377/pizza-dough-tomato-macro.jpg'),
    new Recipe('2 Pizza', '2 A pizza is a sliced dough formed from bread dough.', 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg'),
    new Recipe('3 Pizza', '3 A pizza is a sliced dough formed from bread dough.', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg'),
  ];

  constructor() { }

  ngOnInit() { }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }
}
