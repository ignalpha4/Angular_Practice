import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './authentication/auth.guard';



const routes: Routes = [

  {path:'',loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[authGuard]},
  {path:'**',redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
