import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !:FormGroup;

  erroMsg: string |undefined;

  constructor(private fb:FormBuilder, private userAuthService:UserAuthService,private router:Router){
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
    const formData = this.loginForm.value;
    console.log(this.loginForm);

    if(this.userAuthService.login(formData)){
      
      alert("Login Successfull")
      this.userAuthService.setCurrentUser(formData.email)
      this.router.navigate(['/dashboard']);
    }else{
      this.erroMsg = "Incorrect Credentials !";
    }

  }
}
