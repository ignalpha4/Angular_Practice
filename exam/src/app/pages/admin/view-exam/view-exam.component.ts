import { Component } from '@angular/core';
import { ExamsService } from 'src/app/core/services/exams.service';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss']
})
export class ViewExamComponent {

  currentExam:any;
  constructor(private examService:ExamsService){

    this.currentExam =  this.examService.getExam();
    console.log(this.currentExam);
  }
}
