import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductFormComponent } from './home/product-form/product-form.component';
import { CategoryListComponent } from './home/category-list/category-list.component';
import { SupplierListComponent } from './home/supplier-list/supplier-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:"products",component:ProductListComponent},
  {path:"categories",component:CategoryListComponent},
  {path:"suppliers",component:SupplierListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
