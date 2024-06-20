import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/interfaces/users.interface';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  // protected renderer:string = ''
  constructor(private router: Router,private userAuthService:UserAuthService) {

  }

  ngOnInit():void{
    this.showProducts();
  }


  get username():IUsers{
    return (this.userAuthService.getCurrentUser());
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

  logout():void{
    this.userAuthService.logout();
    this.router.navigate(['/login']);
  }
}

