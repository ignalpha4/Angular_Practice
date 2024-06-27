import { Component } from '@angular/core';
import { ExamsService } from 'src/app/core/services/exams.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  exams:any;

  constructor(private examService:ExamsService){

    this.examService.examSubject.subscribe((exams)=>{
      this.exams = exams;
      console.log(this.exams);
      
    })
  }



}
