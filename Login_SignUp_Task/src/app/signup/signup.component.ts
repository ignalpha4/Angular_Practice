import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  errorMsg='';

  SignupForm !: FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){
    this.initForm();
  };

  initForm(){ 

    this.SignupForm = this.fb.group({
      name:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    })
  } 

  signUp(){
    const formData = this.SignupForm.value;
    console.log("Form Data",formData);

    if(this.authService.signUp(formData)==true){
      alert("User SignUp successfull")
      this.router.navigate(['/login']);
    }else{
      this.errorMsg = "username already exists !!";
    }
    
  }
}
