import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/core/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {

    questions:any;

    constructor(private questionService:QuestionService,private router:Router){}

    ngOnInit(){
      this.questionService.questionSubject.subscribe((questions:any)=>{
        this.questions = questions;
      })
    }

    colDef:any=[
      {headerName:'Q No',field:'q_no',width:80},
      {headerName:'Question',field:'question',width:250},
      {headerName:'Option 1',field:'o1',width:150},
      {headerName:'Option 2',field:'o2',width:150},
      {headerName:'Option 3',field:'o3',width:150},
      {headerName:'Option 4',field:'o4',width:150},
      {headerName:'Correct Opt',field:'correctOption',width:100},
      {headerName:'Difficulty',field:'difficulty',width:100},
      {
        headerName:'Action',
        field:'action',
        cellRenderer:()=>{
          return `
          <button type='button' class='btn btn-primary btn-sm' data-action-type='edit'>Edit</button>
          <button type='button' class='btn btn-danger btn-sm mx-2' data-action-type='delete'>Delete</button>
          `
        },
        onCellClicked:(params:any)=>{
          if(params.event.target.dataset.actionType==='edit'){
            this.editQuestion(params.data.q_no);
          }
          if(params.event.target.dataset.actionType==='delete'){
            this.deleteQuestion(params.data.q_no);
          }
        },
        width:160
      },
    ]

    editQuestion(q_no:number){
      this.questionService.editData(q_no);
      this.router.navigate(['/pages/admin/dashboard/questionForm'])

    }

    deleteQuestion(q_no:number){
      this.questionService.deleteData(q_no);
    }

}
