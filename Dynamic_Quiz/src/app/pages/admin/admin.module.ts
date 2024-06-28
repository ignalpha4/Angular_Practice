import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { TestDetailsComponent } from './test-details/test-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    QuestionListComponent,
    QuestionFormComponent,
    TestDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule,
    RouterModule
  ]
})
export class AdminModule { }
