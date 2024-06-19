import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/authentication/user-auth.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // protected renderer:string = ''
  constructor(private router: Router,private userAuthService:UserAuthService) {}

  get username(){
    return this.userAuthService.getCurrentUser();
  }

  showProducts(): void {
    this.router.navigate(['/dashboard/products']);
    // this.renderer = "Products" 
  }
  

  showCategories(): void {
    this.router.navigate(['/dashboard/categories'])
    // this.renderer = "Categories" 
  }
  
  showSuppliers(): void {
    this.router.navigate(['/dashboard/suppliers']);
    // this.renderer = "Suppliers" 
  }

  logout(){
    this.userAuthService.logout();
    this.router.navigate(['/login']);
  }
}

