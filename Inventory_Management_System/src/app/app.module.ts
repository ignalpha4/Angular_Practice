import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AgGridModule } from 'ag-grid-angular';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    CategoryListComponent,
    CategoryFormComponent,
    SupplierListComponent,
    SupplierFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
