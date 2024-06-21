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

  constructor(private fb:FormBuilder,private categoryService:CategoryServiceService){
      this.initForm();
  }

  initForm(){
    this.categoryForm =this.fb.group({
       id:['',Validators.required],
       name:['',Validators.required]
    })
  }

  submit(){
    const category = this.categoryForm.value;
    this.categoryService.addData(category);

    this.categoryForm.reset();
  }

  updateCat(cat:any){
    this.categoryForm.patchValue(cat);
  }

}
