import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'dashboardContent',component:DashboardContentComponent},
      {path:'questionList',component:QuestionListComponent},
      {path:'testDetails',component:TestDetailsComponent},
      {path:'questionForm',component:QuestionFormComponent},
      {path:'viewExam',component:ViewExamComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }