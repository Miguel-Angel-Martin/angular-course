import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router'
;
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  get recipeControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit(){
    const newRecipe = new Recipe(this.recipeForm.value['name'],
    this.recipeForm.value['description'],
    this.recipeForm.value['imagePath'],
    this.recipeForm.value['ingredients']
    )
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
    }else{
      this.recipeService.addRecipe(newRecipe);
    }
    console.log(this.recipeForm);
    this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'quantity': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  private initForm() {
    let recipeName: string= '';
    let recipeImagePath: string= '';
    let recipeDescription: string= '';
    const recipeIngredients: FormArray = new FormArray([]);

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName= recipe.name;
      recipeImagePath= recipe.imagePath;
      recipeDescription= recipe.description
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {          
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'quantity': new FormControl(ingredient.quantity, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      "imagePath": new FormControl(recipeImagePath, Validators.required),
      "description": new FormControl(recipeDescription, Validators.required),
      "ingredients": recipeIngredients
    });
    
  }
  
  onCancel(){
    this.recipeForm.reset();
    this.editMode = false;
    this.router.navigate['../'], {relativeTo: this.route};
  }
  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
