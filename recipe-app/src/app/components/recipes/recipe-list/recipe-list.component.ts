import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'A pizza is a sliced dough formed from bread dough.', 'https://p1.pxfuel.com/preview/943/14/377/pizza-dough-tomato-macro.jpg'),
    new Recipe('Pizza', 'A pizza is a sliced dough formed from bread dough.', 'https://p1.pxfuel.com/preview/943/14/377/pizza-dough-tomato-macro.jpg'),
    new Recipe('Pizza', 'A pizza is a sliced dough formed from bread dough.', 'https://p1.pxfuel.com/preview/943/14/377/pizza-dough-tomato-macro.jpg'),
  ];

  constructor() { }

  ngOnInit() { }
}
