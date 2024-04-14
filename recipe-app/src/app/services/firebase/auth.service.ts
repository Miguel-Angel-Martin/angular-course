import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    });
  }
}
