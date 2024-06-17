import { Component, EventEmitter, Input, Output,OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  form!:FormGroup;

  @Output() productData = new EventEmitter(); 
   
  @Input() editProduct : any | null = null;
  
  constructor(private fb:FormBuilder){
    this.initForm();
  }

  initForm(){
    this.form =this.fb.group({
      P_Id:['',Validators.required],
      P_Name:['',Validators.required],
      P_Category:[''],
      P_Quantity:[''],
      P_Price:[''],
      P_Supplier:['']
    })
  }

  ngOnChanges(changes:SimpleChanges){

    if(changes["editProduct"] && changes["editProduct"].currentValue){
      console.log("chnage detected")
      this.form.patchValue(this.editProduct);
    }
  }


  submit(){

    console.log(this.form.value);

    const formData = this.form.value;

    this.productData.emit(formData);

    this.form.reset();
  }

}
