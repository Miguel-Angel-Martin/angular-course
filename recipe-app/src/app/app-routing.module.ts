import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { recipeResolver } from './resolvers/recipe-resolver';
import { AuthComponent } from './components/auth/auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch : 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve:[recipeResolver]},
    {path: ':id/edit', component: RecipeEditComponent},

  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
