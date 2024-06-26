import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  taskSubject = new BehaviorSubject(this.getData());

  // tasksList :EventEmitter<any> = new EventEmitter<any>(); 

  taskData :any = []

  taskToEdit:any = null;


  constructor() {

      // this.taskData = this.getData()

      // this.tasksList.emit(this.taskData);

  }

  getData(){
     let data =  localStorage.getItem('tasks');
     return data ? JSON.parse(data) : [];
  }

  addData(newTask:ITask){

    let tasks = this.getData();

    let index = tasks.findIndex((task:ITask)=>task.title ===  newTask.title);

    if(index!==-1){
      tasks[index]=newTask
    }else{
      tasks.push(newTask);
    }

    localStorage.setItem('tasks',JSON.stringify(tasks));

    this.taskSubject.next(tasks);

    // this.tasksList.emit(tasks);
  }



  deleteTask(index:number){
      console.log(index);

      let tasks = this.getData();

      tasks.splice(index,1);

      localStorage.setItem('tasks',JSON.stringify(tasks));

      this.taskSubject.next(tasks);
      // this.tasksList.emit(tasks);
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

}
