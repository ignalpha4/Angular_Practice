import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  //User signup service
  signUp(formData:any){

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user: any) => user.username === formData.username)
    if (user) {
      return false; 
    }

    users.push(formData);

    localStorage.setItem('users',JSON.stringify(users));

    return true;
  }

  //--login Service
  login(username:any,password:any):boolean{

    let users = JSON.parse(localStorage.getItem('users')||'[]');

    let user = users.find((user:any)=>user.username===username && user.password===password)

    if(user){
      return true;
    }else{
      return false;
    }
  }
  //for auth guard 
  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'));
  }
  //when logged in set currentuser by his name
  setCurrentUser(username:string):void{
    localStorage.setItem('currentUser',username);
  }
  //check for currentuser
  getCurrentUser():any{
    return localStorage.getItem('currentUser');
  }
  //remove currentuser 
  logout(){
    localStorage.removeItem('currentUser');
  }
}
