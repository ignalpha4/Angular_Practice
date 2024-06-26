import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent {

  taskForm!:FormGroup
  tasktoedit:any;

  constructor(private fb:FormBuilder,private taskService:TaskService){
    this.initForm();
  }


  //date
  today = new Date();
  formattedDate = this.today.toISOString().slice(0, 10);



  ngOnInit(){

    this.tasktoedit = this.taskService.getEditTask();
    this.taskForm.patchValue(this.tasktoedit);

    console.log(this.formattedDate);
    
  }

  initForm(){
    this.taskForm = this.fb.group(
      {
        title:['',Validators.required],
        desc:['',Validators.required],
        date:['',Validators.required],
        priority:['',Validators.required],
        status:['',Validators.required]
      }
    )
  }

  submit(){
     let newtask = this.taskForm.value;
     this.taskService.addData(newtask);
     this.taskForm.reset()
      alert("task added/updated");
  }

}
