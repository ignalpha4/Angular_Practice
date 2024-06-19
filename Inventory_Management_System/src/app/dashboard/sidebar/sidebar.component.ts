import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/authentication/user-auth.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  protected renderer:string = ''
  constructor(private router: Router,private userAuthService:UserAuthService) {}


  showProducts(): void {

    this.renderer = "Products" 
  }
  
  get username(){
    return this.userAuthService.getCurrentUser();
  }

  showCategories(): void {
 
    this.renderer = "Categories" 
  }
  
  showSuppliers(): void {
    this.renderer = "Suppliers" 
  }

  logout(){
    this.userAuthService.logout();
    this.router.navigate(['/login']);
  }
}

