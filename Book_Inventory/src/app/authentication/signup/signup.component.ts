import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm!:FormGroup;
  errorMsg:string =''
  constructor(private fb:FormBuilder, private authService:AuthenticationServiceService,private router:Router){
    this.initForm();
  }

  initForm(){
    this.signupForm = this.fb.group(
      {
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required],
        role:['',Validators.required]
      },

    )
  }

  signup(){
    console.log(this.signupForm);

    const formData =this.signupForm.value;

    if(this.authService.signup(formData)){
      alert("user signup successfull !");
      this.router.navigate(['/login'])
    }else{
      this.errorMsg ="User with this email already exists";
    }

  }


}
