import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

    Cat_Form!:FormGroup;

    @Output() CatData =  new EventEmitter();
    @Input() editCat:any;

    constructor(private fb :FormBuilder){
      this.initForm();
    }

    ngOnChanges(changes:SimpleChanges){
      if(changes["editCat"] && changes["editCat"].currentValue){
        this.Cat_Form.patchValue(this.editCat);
      }
    }

    initForm(){
      this.Cat_Form = this.fb.group(
        {
          C_Id:[''],
          C_Name:['']
        }
      )
    }

    submit(){

    
      const formData = this.Cat_Form.value;
      this.CatData.emit(formData);
    }


}
