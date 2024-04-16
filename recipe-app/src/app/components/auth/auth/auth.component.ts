import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/firebase/auth.service';
import { AuthResponseData } from 'src/app/interfaces/firebase/auth-response-data';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

constructor(private authService: AuthService){}
isLoginMode:boolean = true;
isLoading: boolean = false;
error:string=null;
authObs: Observable<AuthResponseData>;
onSwitchMode(){
  this.isLoginMode = !this.isLoginMode;
}
onSubmit(form: NgForm){
  if (!form.valid){
    return;
  }
  const email = form.value.email;
  const password = form.value.password;
  

  if (this.isLoginMode){
    this.isLoading = true;
    this.onLogin(email, password);
  }else{
    this.isLoading = true;
    this.onSignup(email, password);
  }
  this.authObs.subscribe(resData=>{
    console.log("ResData: ",resData);
    this.isLoading = false;
  },
  errorMessage=>{
    this.isLoading = false;
    this.error = errorMessage;
  } 
  );
  form.reset();
}
onSignup(email: string, password: string){
  this.authObs = this.authService.signup(email, password)
}
onLogin(email: string, password: string){
  this.authObs = this.authService.login(email, password);
}

}
