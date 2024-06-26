import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  /* @Input() */ recipe: Recipe;
  id: number;
  

constructor(private recipeService: RecipeService,
            private route: ActivatedRoute,
            private router: Router){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
    /* const id = this.route.snapshot.params['id']; */

  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

onAddToShoppingList(){
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}
onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['/recipes']);
}
}
