import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  username:any;

  constructor(private authService:AuthService){
    let user = this.authService.getCurrentUser();
    this.username = user.name;  
  }

  logout(){
    this.authService.logout();
  }

  

}
