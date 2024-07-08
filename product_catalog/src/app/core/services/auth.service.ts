import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }

  getUsers(){
    let users = localStorage.getItem('users')
    return users ? JSON.parse(users) : []; 
  }

  addUser(newUser:any){
    let users = this.getUsers();

    let user = users.find((user:any)=>user.email === newUser.email);

    if(user){
      return false;
    }

    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    return true;
  }

  userLogin(loginUser:any){

    let users = this.getUsers();

    let user =  users.find((user:any)=>user.email === loginUser.email && user.password ===loginUser.password);

    if(user){
      return true;
    }
    return false;
  }

  setCurrentUser(loginUser:any){
    localStorage.setItem('currentUser',loginUser.email);
  }

  getCurrentUser(){

    let users =  this.getUsers();

    let currentuser = localStorage.getItem('currentUser');

    let user = users.find((user:any)=>user.email === currentuser);

    return user;
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
