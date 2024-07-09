import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/users.interface';
import { LiteralPrimitive } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  constructor(private router: Router) { }

  signup(formData:IUser):boolean{

     let users = JSON.parse(localStorage.getItem('users') || '[]');

     let user = users.find((user:IUser)=>user.email === formData.email)

     if(user){
      return false;
     }

     users.push(formData);

     localStorage.setItem('users',JSON.stringify(users));

     return true;
  }


  login(formData:IUser){

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    let user  = users.find((user:IUser)=>user.email=== formData.email && user.password === formData.password);

    if(user){
      return true;
    }
    else{
      return false;
    }
  }


  setCurrentUser(email:string){
    localStorage.setItem('currentUser',email);
  }

  getCurrentUser():IUser{
    const userEmail =localStorage.getItem('currentUser') || '';
    const users= JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user:IUser)=>user.email===userEmail);
    return user;
  }


  logout(){
    localStorage.removeItem('currentUser');
    alert("You are logged out !")
    this.router.navigate(['/login'])
  }

}
