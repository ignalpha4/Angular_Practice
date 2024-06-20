import { UpperCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { IUsers } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor() { }

  adduser(formdata:IUsers):boolean{
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    let user = users.find((user:IUsers)=>user.email===formdata.email);

    if(user){
      return false; //user already exists wirh this email
    }

    users.push(formdata);
    localStorage.setItem('users',JSON.stringify(users));

    return true;
    
  }

  login(formData :IUsers):boolean{

    const users= JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user:IUsers)=>user.email===formData.email && user.password===formData.password);

    if(user){
      return true;
    }else{
      return false;
    }
  }

  setCurrentUser(email:string):void{
    localStorage.setItem("currentUser",email);
  }

  getCurrentUser():IUsers{

    const userEmail =localStorage.getItem('currentUser') || '';

    const users= JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user:IUsers)=>user.email===userEmail);
    
    return user;

  }

  isAuthenticated():boolean{
    return Boolean(localStorage.getItem("currentUser"));
  }
  
  logout():void{
    localStorage.removeItem("currentUser");
  }

}
