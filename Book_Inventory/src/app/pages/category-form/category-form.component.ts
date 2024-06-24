import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/core/interfaces/category.interface';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {

  categoryForm!:FormGroup;

  counter:number = 1;

  initializeCounter(){

    this.counter=1;

    let cats = this.categoryService.getData();

    cats.forEach((cat:ICategory)=>{
      this.counter++;
    })

  }

  constructor(private fb:FormBuilder,private categoryService:CategoryServiceService){
    this.initializeCounter();
    this.initForm();

  }

  initForm(){

    this.categoryForm =this.fb.group({
       id:[this.counter,Validators.required],
       name:['',Validators.required]
    })

    this.categoryForm.get('id')?.disable();
  }

  submit(){
    const category = this.categoryForm.getRawValue();
    this.categoryService.addData(category);
    this.counter++;
    this.categoryForm.reset();
    this.initForm()
  }

  updateCat(cat:ICategory){
    this.categoryForm.patchValue(cat);
  }

}
