import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [

    new Ingredient('Tomatoes', 5),
    new Ingredient('Cucumbers', 2),
    new Ingredient('Bread', 2)
  ];

  constructor() {

    console.log("==>> ~ file: shopping-list.component.ts:12 ~ ShoppingListComponent ~ ingredients:", this.ingredients);
  }
  ngOnInit() { }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    
  }
}
