import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm !: FormGroup;


  errorMsg='';

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){
    this.initForm();
  };

  initForm(){ 

    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  } 

  login(){
    const formData = this.loginForm.value;
    console.log("Form Data",formData);

    if(this.authService.login(formData.username,formData.password)){
      alert("Login Successfull");
      
      this.authService.setCurrentUser(formData.username);

      this.router.navigate(['/dashboard']);
    }else{
   
      this.errorMsg = "Incorrect Credentials !!"
    }

  }


}
