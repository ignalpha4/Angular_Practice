import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoryService } from '../category-service.service';

import { Subscription } from 'rxjs';
import { SupplierServiceService } from '../supplier-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnChanges {
  form!: FormGroup;

  @Output() productData = new EventEmitter();

  @Input() editProduct: any | null = null;

  categories: any[] = [];
  suppliers : any[]=[];

  private subscription!: Subscription;

  constructor(private fb: FormBuilder,private categoryService:categoryService,private supplierService :SupplierServiceService) {
    this.initForm();
  }

  ngOnInit() {
    this.categoryService.categories$.subscribe(categories => {
      this.categories = categories;
    });

    this.supplierService.suppliers$.subscribe(suppliers=>{
      this.suppliers = suppliers;
    })

   };
  

  initForm() {
    this.form = this.fb.group({
      P_Id: ['', Validators.required],
      P_Name: ['', Validators.required],
      P_Category: [''],
      P_Quantity: [''],
      P_Price: [''],
      P_Supplier: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editProduct'] && changes['editProduct'].currentValue) {
      console.log('Change detected');
      this.form.patchValue(this.editProduct);
    }
  }



  submit() {
    console.log(this.form.value);

    const formData = this.form.value;

    this.productData.emit(formData);

    this.form.reset();
  }


}
