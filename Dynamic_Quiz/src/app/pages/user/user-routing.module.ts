import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamComponent } from './exam/exam.component';
import { ReviewComponent } from './review/review.component';
import { ViewExamComponent } from './view-exam/view-exam.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent,
    children:[
      {path:'exam',component:ExamComponent},
      {path:'review',component:ReviewComponent},
      {path:'viewExam',component:ViewExamComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
