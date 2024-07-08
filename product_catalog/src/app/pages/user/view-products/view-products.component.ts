// view-products.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICat } from 'src/app/core/interfaces/category.interface';
import { IProduct } from 'src/app/core/interfaces/product.interface';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent {

  filterForm!: FormGroup;
  searchKey: string = '';
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: ICat[] = [];

  constructor(private productService: ProductService,private categoryService: CategoryService,private router: Router,private fb: FormBuilder) {
    this.initForm();
    this.productService.products$.subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
    this.categoryService.categories$.subscribe(categories => {
      this.categories = categories;
    });
  }

  initForm() {
    this.filterForm = this.fb.group({
      category: ['', Validators.required]
    });
  }

  onFilterSelect() {
    const selectedCategory = this.filterForm.get('category')?.value;
    if (selectedCategory === '') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.P_Category.includes(selectedCategory)
      );
    }
  }

  updateResults() {
    this.filteredProducts = this.products.filter(product =>
      product.P_Name.toLowerCase().includes(this.searchKey.toLowerCase()) ||
      product.P_Category.toLowerCase().includes(this.searchKey.toLowerCase())
    );
  }

  viewProduct(product: any) {
    localStorage.setItem('currentItem', JSON.stringify(product));
    this.router.navigate(['pages/user/dashboard/product-details']);
  }
}
