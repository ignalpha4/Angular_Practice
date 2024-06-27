import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionSubject = new BehaviorSubject<any>(this.getData());

  editQuestion:any;
  
  constructor() { }

  getData(){
    let data =  localStorage.getItem('questions');
    return data ? JSON.parse(data) : [];
  }

  addData(newQuestion:any){
    let questions  = this.getData();

    let index  =  questions.findIndex((q:any)=>q.q_no === newQuestion.q_no);

    if(index!==-1){
      questions[index]=newQuestion;
    }else{
      questions.push(newQuestion);
    }

    localStorage.setItem('questions',JSON.stringify(questions));
    this.questionSubject.next(questions);
  }

  deleteData(q_no:number){
    let questions = this.getData();
    let updatedQuestions =  questions.filter(((q:any)=>q.q_no !== q_no));
    localStorage.setItem('questions',JSON.stringify(updatedQuestions));
    this.questionSubject.next(updatedQuestions);
  }

  editData(q_no:number){
    let questions = this.getData();
    let updatedQuestion =  questions.find(((q:any)=>q.q_no === q_no));
    this.editQuestion = updatedQuestion;
  }
  geteditData(){
    return this.editQuestion ;
  }
}
