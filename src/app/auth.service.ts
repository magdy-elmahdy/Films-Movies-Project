import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable , BehaviorSubject}from 'rxjs' 
import {UserData} from './userData'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject(null);

  constructor(private HttpClient : HttpClient ,private _Router:Router) {
    if(localStorage.getItem('userData') != null){
      this.currentUser.next(JSON.parse(localStorage.getItem('userData')));
    }
   }

    register(registerFormValue):Observable<any>
    {
      return this.HttpClient.post('https://sticky-note-fe.vercel.app/signup' ,registerFormValue )
    }

    login(loginFormValue):Observable<any>
    {
      return this.HttpClient.post('https://sticky-note-fe.vercel.app/signin' ,loginFormValue )
    }

    logOut(){
      this.currentUser.next(null);
      localStorage.setItem('userData' , 'null');
      this._Router.navigate(['/login']);
    }

    saveCurrentUser(first_name , last_name , email , token){

      let user = new UserData(first_name , last_name , email , token);
      localStorage.setItem('userData',JSON.stringify(user));
      this.currentUser.next(user);
      console.log(this.currentUser);
      // this.currentUser={
      //   first_name:first_name,
      //   last_name:last_name,
      //   email:email,
      //   token:token,
      // }

    }
}
