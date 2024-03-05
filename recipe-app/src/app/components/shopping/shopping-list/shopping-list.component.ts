import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping/shopping-list-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsChangeSub: Subscription;

  constructor(private slService: ShoppingListService) {

    console.log("==>> ~ file: shopping-list.component.ts:12 ~ ShoppingListComponent ~ ingredients:", this.ingredients);
  }
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.ingredientsChangeSub=this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  /*  onIngredientAdded(ingredient: Ingredient){
      this.ingredients.push(ingredient);    
    } */

  ngOnDestroy(): void {
    this.ingredientsChangeSub.unsubscribe();
  }
}
