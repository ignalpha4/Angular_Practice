import { Component } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/users.interface';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  currentUser:IUser;

  constructor(private authService:AuthenticationServiceService){
    this.currentUser= this.authService.getCurrentUser();
  }
}
