import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!:FormGroup
  errorMsg : string = ' ';

  constructor(private fb:FormBuilder,private router:Router, private  authService :AuthenticationServiceService){
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  login(){

      const formData = this.loginForm.value;

      if(this.authService.login(formData)){
        this.authService.setCurrentUser(formData.email);
        alert("login done");
        this.router.navigate(['/pages/home']);
      }else{
        this.errorMsg = "Incorrect credentials";
      }
    
  }

}
