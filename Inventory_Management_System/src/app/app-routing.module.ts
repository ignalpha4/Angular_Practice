import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { authGuardGuard } from './authentication/auth-guard.guard';

const routes: Routes = [
  {path:"dashboard",component:SidebarComponent, canActivate:[authGuardGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
