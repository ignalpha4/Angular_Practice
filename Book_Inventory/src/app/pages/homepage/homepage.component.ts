import { Component } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/core/services/authentication-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  currentUser:any;

  constructor(private authService:AuthenticationServiceService){
    this.currentUser= this.authService.getCurrentUser();
  }

}
