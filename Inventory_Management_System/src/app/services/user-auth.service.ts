import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor() { }

  adduser(formdata:any):any{
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    let user = users.find((user:any)=>user.email===formdata.email);

    if(user){
      return false; //that is user already exists wirh this email
    }

    users.push(formdata);
    localStorage.setItem('users',JSON.stringify(users));

    return true;
    
  }

  login(formData :any){

    const users= JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user:any)=>user.email===formData.email && user.password===formData.password);

    if(user){
      return true;
    }else{
      return false;
    }
  }

  setCurrentUser(email:string){
    localStorage.setItem("currentUser",email);
  }

  getCurrentUser(){

    const userEmail =localStorage.getItem('currentUser') || '';

    const users= JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user:any)=>user.email===userEmail);
    console.log("the user that we found",user);
    return user.name

  }

  isAuthenticated():boolean{
    return Boolean(localStorage.getItem("currentUser"));
  }
  
  logout(){
    localStorage.removeItem("currentUser");
  }

}
