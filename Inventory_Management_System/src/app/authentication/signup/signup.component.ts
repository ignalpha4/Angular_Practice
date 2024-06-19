import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm !:FormGroup;

  erroMsg: string | undefined;

  constructor(private fb:FormBuilder, private userAuthService:UserAuthService,private router:Router){
    this.initForm();
  }

  initForm(){
    this.signupForm =this.fb.group(
      {
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
      }
    )
  }

  signUp(){
      const formData =  this.signupForm.value;
      
      if(this.userAuthService.adduser(formData)){
        alert("Signup successfull!!")
        this.router.navigate(['/login']);
      }else{
        this.erroMsg="This email is already registered";
      }
  }

}
