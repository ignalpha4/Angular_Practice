import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserAuthService {

  constructor() { 

  }

  userSubject = new BehaviorSubject<any>(this.getData());
  user$ = this.userSubject.asObservable();


  getData(){

    let data = localStorage.getItem('users');
    return data ? JSON.parse(data) : [];
  }


  addData(newUser:any){

    let users = this.getData();

    let index = users.findIndex((user:any)=>user.name === newUser.name);

    if(index!==-1){
      users[index]=newUser;
    }else{
      users.push(newUser);
    }

    localStorage.setItem("users",JSON.stringify(users));
    this.userSubject.next(users);
  }

  login(loginUser:any){

    let users= this.getData();

    let user = users.find((user:any)=>user.email ===loginUser.email && user.password ===loginUser.password);
    if(!user){
      return false;
    }
    return true;
  }

  setCurrentUser(loginUser:any){
    console.log("setting current user");
    localStorage.setItem('currenUser',loginUser.email);
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
