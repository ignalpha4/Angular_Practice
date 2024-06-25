import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!:FormGroup;
  errorMsg:string = ''

  constructor(private fb:FormBuilder,private userService :UserAuthService,private router:Router){
      this.initForm()
  }

  initForm(){
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
      }
    )
  }

  signup(){
    let newUser = this.signupForm.value;
    console.log(newUser);
    this.userService.addData(newUser);

    alert("User signed in successfully");
    
    this.router.navigate(['/login'])
  }
}
