import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { AuthService} from  '../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup;
  flag:boolean = false;
  errorMessage:string;

  constructor(private _AuthService:AuthService , private _Router:Router ) { }


  getLoginInfo(loginForm){
    this._AuthService.login(loginForm.value).subscribe( (data)=>{
        if(data.message == 'success'){
          this._AuthService.saveCurrentUser(data.user.first_name,data.user.last_name ,data.user.email,data.token);
          this._Router.navigate(['/home']);
        }else{
          this.flag=true;
          this.errorMessage =data.message;
        }
        
    })
  }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      'email':new FormControl(null, [ Validators.required, Validators.email]),
      'password':new FormControl(null,[Validators.required, Validators.maxLength(8)] )
    });
  }

}
