import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamsService } from 'src/app/core/services/exams.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  exams:any;

  constructor(private examService:ExamsService,private router:Router){

    this.examService.examSubject.subscribe((exams)=>{
      this.exams = exams;
      console.log(this.exams); 
    });
  }

  viewExam(exam:any){
    this.router.navigate(['/pages/user/dashboard/viewExam']);
    this.examService.viewExam(exam);
  }

}
