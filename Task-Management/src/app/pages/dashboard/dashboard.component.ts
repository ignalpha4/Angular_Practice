import { Component } from '@angular/core';
import { count } from 'rxjs';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private taskService:TaskService){}

  pendingCount!:number;
  inProgressCount!:number;
  completedCount!:number;

  ngOnInit(){
    this.getCount();
  }

  getCount(){
    let tasks = this.taskService.getData();

    let pendingTasks = tasks.filter((task:any)=>task.status === 'Pending');
    let inProgressTasks = tasks.filter((task:any)=>task.status === 'In progress');
    let completedTasks = tasks.filter((task:any)=>task.status === 'Completed');

    this.pendingCount = pendingTasks.length;
    this.inProgressCount = inProgressTasks.length;
    this.completedCount = completedTasks.length;

  }

}
