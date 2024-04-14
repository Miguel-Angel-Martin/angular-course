import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/firebase/auth.service';

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
    //this.onLogin(email, password);
  }else{
    console.log("-------onSignup---------------");
    this.isLoading = true;
    this.onSignup(email, password);
  }
  form.reset();
}
onSignup(email: string, password: string){
  console.log(email, password);
  this.authService.signup(email, password).subscribe(resData=>{
    console.log("ResData: ",resData);
    this.isLoading = false;
  },
  errorRes=>{
    console.log("Error: ",errorRes);
    this.isLoading = false;
    this.error = errorRes.error.error.message;
  } 
  );
}
/* onLogin(email: string, password: string){
  this.authService.login(email, password).subscribe(resData=>{
    console.log(resData);
    form.reset();
  },
  errorRes=>{
    console.log(errorRes);
  });
} */
}
