import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion:string='teacher';
  answer:string='';
  genders = ['male', 'female'];
  suggestUserName() {   
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
  }

  
  
  onSubmit(form:NgForm) {
   /*  console.log("submitted", form); */
    console.log("submitted", this.signupForm);
  } 


}
