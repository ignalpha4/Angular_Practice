import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  username:any;
  
  constructor(private authService:AuthService,private router:Router){
    let user = this.authService.getCurrentUser();
    this.username = user.name;  
  }

  logout(){
    alert("user logged out !");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
