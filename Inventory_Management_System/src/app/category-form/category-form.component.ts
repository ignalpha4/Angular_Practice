import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { categoryService } from '../category-service.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnChanges {
  Cat_Form!: FormGroup;

  @Input() editCat: any;

  constructor(private fb: FormBuilder, private categoryService:categoryService) {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editCat'] && changes['editCat'].currentValue) {
      this.Cat_Form.patchValue(this.editCat);
    }
  }

  initForm(): void {
    this.Cat_Form = this.fb.group({
      C_Id: [''],
      C_Name: ['']
    });
  }

  submit(): void {
    const formData = this.Cat_Form.value;
    this.categoryService.addData(formData);
    this.Cat_Form.reset();
  }
}
