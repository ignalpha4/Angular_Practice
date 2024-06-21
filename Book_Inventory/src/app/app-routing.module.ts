import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './dashboard/homepage/homepage.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';


const routes: Routes = [

  {path:'',loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  // {path:'dashboard',component:NavbarComponent,loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
