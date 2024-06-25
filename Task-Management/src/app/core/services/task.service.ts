import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  taskSubject = new BehaviorSubject<any>(this.getData());
  task$ = this.taskSubject.asObservable();

  taskToEdit :any = null;

  getData(){
     let data =  localStorage.getItem('tasks');
     return data ? JSON.parse(data) : [];
  }

  addData(newTask:any){
    let tasks = this.getData();

    let index = tasks.findIndex((task:any)=>task.title ===  newTask.title);

    if(index!==-1){
      tasks[index]=newTask
    }else{
      tasks.push(newTask);
    }

    localStorage.setItem('tasks',JSON.stringify(tasks));
    this.taskSubject.next(tasks);
  }

  deleteTask(index:number){
      console.log(index);

      let tasks = this.getData();

      tasks.splice(index,1);

      localStorage.setItem('tasks',JSON.stringify(tasks));

      this.taskSubject.next(tasks);

  }

  editTask(index:number){
    let tasks =this.getData();
    this.taskToEdit = tasks[index];
  }

  getEditTask(){
    if(this.taskToEdit){
      return this.taskToEdit;
    }
  }

  constructor() { }
}
