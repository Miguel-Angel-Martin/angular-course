import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  @Input() recipe: Recipe;
  
ngOnInit(): void {
    
}
constructor(private recipeService: RecipeService){}

onAddToShoppingList(){
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}
}
