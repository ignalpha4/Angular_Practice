import {Component,Input,OnChanges,SimpleChanges,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/core/interfaces/product.interface';
import { ISupplier } from 'src/app/core/interfaces/supplier.interface';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';
import { SupplierService } from 'src/app/core/services/supplier.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})

export class ProductFormComponent implements OnInit, OnChanges {
  form!: FormGroup;

  @Input() editProduct!: any;

  categories: IProduct[] = [];
  suppliers: ISupplier[] = [];

  constructor(private fb: FormBuilder,private categoryService: CategoryService,private supplierService: SupplierService,private productService: ProductService) {
    this.initForm();
  }

  ngOnInit() {
    this.categoryService.categories$.subscribe((categories) => {
      this.categories = categories;
    });

    this.supplierService.suppliers$.subscribe((suppliers) => {
      this.suppliers = suppliers;
    });
  }

  initForm() {
    this.form = this.fb.group({
      P_Id: ['', Validators.required],
      P_Name: ['', Validators.required],
      P_Category: [''],
      P_Price: [''],
      P_Supplier: [''],
      P_Image: [''],
      P_Desc:['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editProduct'] && changes['editProduct'].currentValue) {
      console.log('Change detected');
      this.form.patchValue(this.editProduct);
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.patchValue({ P_Image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }

  submit() {
    const formData = this.form.value;
    console.log(formData);
    this.refreshGrid();
    this.productService.addData(formData);
    this.form.reset();
  }

  refreshGrid() {
    this.categories = [...this.categories];
  }
}
