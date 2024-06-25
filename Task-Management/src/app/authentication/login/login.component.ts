import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;
  errorMsg:string=''

  constructor(private fb:FormBuilder,private userService:UserAuthService,private router:Router){
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
      }
    )
  }

  login(){
    let loginUser = this.loginForm.value;
    if(this.userService.login(loginUser)){
      alert("login done")
      this.userService.setCurrentUser(loginUser);
      this.router.navigate(['pages']);
    }else{
      this.errorMsg= "invalid credentials!"
    }
  }

}
