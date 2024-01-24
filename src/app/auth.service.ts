import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isAuthenticated:boolean=true;
  
  isLogin(){
    this.isAuthenticated=true;
  }

  isLogout(){
    this.isAuthenticated=false;
  }


}
