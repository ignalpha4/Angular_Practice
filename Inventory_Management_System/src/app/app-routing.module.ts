import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';

const routes: Routes = [
  {path:"products",component:ProductListComponent},
  {path:"categories",component:CategoryListComponent},
  {path:"suppliers",component:SupplierListComponent}
  // {path:"productForm",component:ProductFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
