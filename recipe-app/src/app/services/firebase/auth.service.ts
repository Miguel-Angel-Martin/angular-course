import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';

import { Constants } from 'src/app/config/constants';
import { AuthResponseData } from 'src/app/interfaces/firebase/auth-response-data';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user= new BehaviorSubject<User>(null);
  


  constructor(private http: HttpClient) { }

  signup(email:string, password:string){
    return this.http.post<AuthResponseData>(Constants.API_SIGNUP+Constants.API_KEY, {
      email:email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError), tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      }))
  }
  /**
   * 
   * @param email 
   * @param password 
   * @returns 
   */
  login(email:string, password:string){
      return this.http.post<AuthResponseData>(Constants.API_LOGIN+Constants.API_KEY, {
        email:email,
        password: password,
        returnSecureToken: true
    }).pipe(
      catchError(this.handleError),tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      }))
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
  }
  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    console.log(errorRes.error.error.message);
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
      case 'USER_DISABLED':
        errorMessage = 'This user is disabled.';
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Invalid login credentials';
    }
    return throwError(errorMessage);
  }
}
