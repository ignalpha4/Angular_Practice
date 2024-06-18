import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService:AuthService,private router:Router){}

  currentuser:any;
  
  ngOnInit(){
    this.currentuser = this.authService.getCurrentUser();
    console.log("this is what we got",this.currentuser)
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
