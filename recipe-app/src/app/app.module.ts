import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping/shopping-edit/shopping-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListService } from './services/shopping/shopping-list-service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    FooterComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
