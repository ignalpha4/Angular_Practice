import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task.interface';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private taskService:TaskService){
      
    this.taskService.taskSubject.subscribe(tasks=>{
      this.tasks = tasks;
    })

    this.getCount();
  }

  pendingCount!:number;
  inProgressCount!:number;
  completedCount!:number;

  tasks:ITask[] = [];

  ngOnInit(){

  }


  getCount(){
    // this.tasks = this.taskService.getData();

    let pendingTasks = this.tasks.filter((task:ITask)=>task.status === 'Pending');
    let inProgressTasks = this.tasks.filter((task:ITask)=>task.status === 'In progress');
    let completedTasks = this.tasks.filter((task:ITask)=>task.status === 'Completed');

    this.pendingCount = pendingTasks.length;
    this.inProgressCount = inProgressTasks.length;
    this.completedCount = completedTasks.length;

  }

}
