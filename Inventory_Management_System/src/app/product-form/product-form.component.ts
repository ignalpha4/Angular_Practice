import { Component, EventEmitter, Input, Output,OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  form!:FormGroup;

  @Output() productData = new EventEmitter(); 
   
  @Input() editProduct : any | null = null;

  data:any;

  constructor(private fb:FormBuilder, private myService :MyServiceService ){
    this.initForm();
    this.data = this.myService.getData();
    console.log("Changes in constructor",this.data)
  }

  // ngOnInit(){
  //   this.myService.getData().then((res : any)=>{
  //     this.data = res;
  //   });
  //   console.log("Changes in init",this.data)
  // }

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

    // this.data = this.myService.getData();

    // if(changes['data'] ){
    //   console.log("change detected")
    // }

  }

  toCheck(){
    console.log("inside tocheck");
    this.data = this.myService.getData();
    console.log("Changes in constructor",this.myService.getData())

    
  }
  
  submit(){

    console.log(this.form.value);

    const formData = this.form.value;

    this.productData.emit(formData);

    const suppliersData = this.myService.getData();

    console.log(suppliersData);

    this.form.reset();
  }

}
