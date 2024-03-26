import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping/shopping-list-service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  /* @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild ('amountInput') amountInputRef: ElementRef; */
  //@Output() ingredientAdded = new EventEmitter <Ingredient>();
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService){

  }

  ngOnInit(): void {
    this.slService.startingEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.quantity
        })
      }
    );      
  }
  onSubmit(form: NgForm){
/*     const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value; */
    const value = form.value;
    const newIngredient = new Ingredient (value.name, value.amount);
    if (this.editMode === true){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      this.editMode = false;
    } else{
      this.slService.addIngredient(newIngredient);
      //this.ingredientAdded.emit(newIngredient);
    }
    this.editMode = false;
    form.reset();    
  }

onClear(){
  this.slForm.reset();
  this.editMode = false;
}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
