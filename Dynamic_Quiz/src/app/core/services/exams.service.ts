import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor() { }

  examSubject =  new BehaviorSubject<any>(this.getData());

  getData(){
    let exams =  localStorage.getItem('exams');
    return exams ?JSON.parse(exams) : []
  }

  addData(exam:any){
    let exams = this.getData();
    exams.push(exam);
    localStorage.setItem('exams',JSON.stringify(exams));
    this.examSubject.next(exams);
  }

}
