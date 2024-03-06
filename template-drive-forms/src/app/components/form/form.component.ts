import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @ViewChild('form') form: NgForm;
  submitted: boolean = false;
  options=[
    {id: 1, name: 'Basic'},
    {id: 2, name: 'Advanced'},
    {id: 3, name: 'Professional'}
  ]
  answer={
    email:'',
    password:'',
    selection: 0
  }
    
  
  onSubmit(form: NgForm) {
    /*  console.log("submitted", form); */
    this.submitted = true;
    console.log("submitted", this.form);
    this.answer.email = this.form.value.email;
    this.answer.password = this.form.value.password;
    this.answer.selection = +this.form.value.selection;
    this.form.reset();
  }
}
