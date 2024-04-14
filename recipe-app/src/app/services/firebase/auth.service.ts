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
    return this.http.post<AuthResponseData>(Constants.API_URL+Constants.API_AUTH, {
      email:email,
      password: password,
      returnSecureToken: true

    });
  }
}
