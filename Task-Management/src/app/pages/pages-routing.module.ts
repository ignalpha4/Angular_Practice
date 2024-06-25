import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {path:"",component:NavbarComponent,
    children:[
      {path:"dashboard",component:DashboardComponent},
      {path:"taskeditor",component:TaskEditorComponent},
      {path:"tasklist",component:TaskListComponent},
    ],
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
