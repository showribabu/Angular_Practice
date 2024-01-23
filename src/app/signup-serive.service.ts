import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,HttpParams} from '@angular/common/http'
import { SignUp } from './sign-up';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class SignupSeriveService {

  constructor(private http: HttpClient,) { }

  _onSignup= 'http://127.0.0.1:2000/onSignup';
  _onLogin = 'http://127.0.0.1:2000/onLogin';

  onSignup(signupModel:SignUp):any{

    // alert('data to the Service');

    let queryParams= new HttpParams()
    .set('name', signupModel.name)
    .set('password', signupModel.password);
    // alert(queryParams);
    // alert('ready to call the method');

   return this.http.get(this._onSignup, {params: queryParams});

  }

  onLogin(loginModel :Login):any{

    let Queryparams=new HttpParams()
    .set("name",loginModel.name)
    .set("password",loginModel.password);
    // alert(Queryparams);

    return this.http.get(this._onLogin,{params:Queryparams});

  }

}
