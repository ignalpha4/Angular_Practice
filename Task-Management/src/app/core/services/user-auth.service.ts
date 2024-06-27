import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {

  constructor() { 

  }

  getData(){

    let data = localStorage.getItem('users');
    return data ? JSON.parse(data) : [];
  }


  addData(newUser:IUser){

    let users = this.getData();

    let index = users.findIndex((user:IUser)=>user.name === newUser.name);

    if(index!==-1){
      users[index]=newUser;
    }else{
      users.push(newUser);
    }

    localStorage.setItem("users",JSON.stringify(users));
  }

  login(loginUser:IUser){

    let users= this.getData();

    let user = users.find((user:IUser)=>user.email ===loginUser.email && user.password ===loginUser.password);
    if(!user){
      return false;
    }
    return true;
  }

  setCurrentUser(loginUser:IUser){
    console.log("setting current user");
    localStorage.setItem('currentUser',loginUser.email);
  }

  getCurrentUser(){
    return localStorage.getItem('currentUser');
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
