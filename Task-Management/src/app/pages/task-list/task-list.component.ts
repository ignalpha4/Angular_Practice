import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {


  filterForm !:FormGroup
  private taskSubscription: Subscription = new Subscription();

  searchKey:string =''
  tasks:any[]=[];
  filteredTasks:any[]=[];
  
  constructor(private taskService:TaskService,private router:Router,private fb:FormBuilder){
    this.initForm()
  }

  initForm(){
    this.filterForm = this.fb.group(
      {
        priority:['',Validators.required],
        status:['',Validators.required]
      }
    )
  }

  ngOnInit() {
    this.taskSubscription = this.taskService.task$.subscribe((tasks) => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }

  priority:string = '';
  status:string='';

  onFilterSelect(){

    this.priority = this.filterForm.get('priority')?.value;
    this.status= this.filterForm.get('status')?.value;

    if(this.priority==='' && this.status===''){
      this.filteredTasks = this.tasks;
    }

    if(this.priority!=='' || this.status!==''){

      if(this.priority!==''){
        this.filteredTasks = this.tasks.filter(task=>
          task.priority.includes(this.priority));
      }
      if(this.status!==''){
        this.filteredTasks = this.tasks.filter(task=>
          task.status.includes(this.status)
        )
      }
    }

    if(this.priority!=='' && this.status!==''){
      this.filteredTasks= this.tasks.filter(task=>
        task.priority.includes(this.priority) &&
        task.status.includes(this.status)
      )
    }


  }

  updateResults(){
    this.filteredTasks = this.tasks.filter(task=>
      task.title.toLowerCase().includes(this.searchKey.toLowerCase()) ||
      task.desc.toLowerCase().includes(this.searchKey.toLowerCase()) ||
      task.status.toLowerCase().includes(this.searchKey.toLowerCase())||
      task.priority.toLowerCase().includes(this.searchKey.toLowerCase()) ||
      task.date.toLowerCase().includes(this.searchKey.toLowerCase())
    )
  }

  editTask(index:number){
    this.taskService.editTask(index);
    this.router.navigate(['/pages/taskeditor'])
  }

  deleteTask(index:number){
    this.taskService.deleteTask(index);
  }
 
}
