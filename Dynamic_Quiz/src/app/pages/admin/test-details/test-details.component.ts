import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamsService } from 'src/app/core/services/exams.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent {

  tests:any=[];

  constructor(private examService:ExamsService,private router:Router){

    let data = this.examService.getData();

    data.forEach((test:any) => {
         let oneTestRecord ={
            username:test[10].username,
            useremail:test[10].useremail,
            score:test[10].score,
            date:test[10].date,
            time:test[10].time,
            test:test
         }
         this.tests.push(oneTestRecord);
    }); 
  }

  colDef:any=[
    {headerName:'username',field:'username',width:200},
    {headerName:'user Email',field:'useremail',width:250},
    {headerName:'score',field:'score'},
    {headerName:'date',field:'date'},
    {headerName:'time',field:'time'},
    {
      headerName:'Action',
      field:'action',
      cellRenderer:()=>{
        return `
          <button class="btn btn-sm btn-primary" data-action-type="view">View</button>
        `
      },
      onCellClicked:(params:any)=>{
        if(params.event.target.dataset.actionType==='view'){
            this.viewTest(params.data.test);
        }
      }
    
    }
  ]

  viewTest(test:any){
    console.log('inside view');
    this.router.navigate(['/pages/admin/dashboard/viewExam']);
    this.examService.viewExam(test);
  }

}
