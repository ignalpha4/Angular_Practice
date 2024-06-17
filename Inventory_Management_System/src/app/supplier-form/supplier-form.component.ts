import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent {

  SuppForm !: FormGroup;

  @Output() SupplierData =  new EventEmitter();
  @Input() editedSupp:any | null =null;
  
  constructor(private fb:FormBuilder){
    this.initForm();
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes["editedSupp"] && changes["editedSupp"].currentValue){
      this.SuppForm.patchValue(this.editedSupp);

    }
  }

  initForm(){
    this.SuppForm = this.fb.group({
      S_Id:[''],
      S_Name:[''],
      S_Contact:[''],
      S_Address:['']
    })
  }

  submit(){
    const formData = this.SuppForm.value;
    this.SupplierData.emit(formData);

    this.SuppForm.reset();
  }

}
