import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TaskService } from '../core/services/task.service';


@NgModule({
  declarations: [
    DashboardComponent,
    TaskEditorComponent,
    TaskListComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    AgGridModule,
    FormsModule,
    
  ]
})
export class PagesModule { }
