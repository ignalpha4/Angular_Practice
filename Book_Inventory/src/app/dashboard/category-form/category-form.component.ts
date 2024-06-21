import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {

  categoryForm!:FormGroup;

  counter:number = 1;

  constructor(private fb:FormBuilder,private categoryService:CategoryServiceService){
      this.initForm();
  }

  initForm(){
    this.categoryForm =this.fb.group({
       id:[{value:this.counter,disabled:true},Validators.required],
       name:['',Validators.required]
    })
  }

  submit(){
    const category = this.categoryForm.getRawValue();
    this.categoryService.addData(category);
    this.counter++;
    this.categoryForm.reset();
    this.initForm()
  }

  updateCat(cat:any){
    this.categoryForm.patchValue(cat);
  }

}
