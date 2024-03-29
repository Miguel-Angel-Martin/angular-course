import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();
  @Input() index: number;
  
  /* constructor(private recipeService: RecipeService) { } */
  ngOnInit(): void {

  }
  /*  onSelected() {
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
    } */
}
