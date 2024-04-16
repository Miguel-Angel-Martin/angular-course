import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { Constants } from 'src/app/config/constants';
import { AuthResponseData } from 'src/app/interfaces/firebase/auth-response-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email:string, password:string){
    console.log("-------------******----------");
    console.log(email, password);
    console.log(Constants.API_SIGNUP+Constants.API_KEY);
    return this.http.post<AuthResponseData>(Constants.API_SIGNUP+Constants.API_KEY, {
      email:email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(errorRes => {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
          return;
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
            break;
          case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email does not exist.';
            break;
          case 'INVALID_PASSWORD':
            errorMessage = 'This password is not correct.';
            break;
        }
        return throwError(errorMessage);
      })
    );
  }
  login(email:string, password:string){
      return this.http.post<AuthResponseData>(Constants.API_LOGIN+Constants.API_KEY, {
        email:email,
        password: password,
        returnSecureToken: true
    })
  }
}
