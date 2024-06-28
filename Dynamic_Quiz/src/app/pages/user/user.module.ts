import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamComponent } from './exam/exam.component';
import { ReviewComponent } from './review/review.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewExamComponent } from './view-exam/view-exam.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ExamComponent,
    ReviewComponent,
    ViewExamComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
