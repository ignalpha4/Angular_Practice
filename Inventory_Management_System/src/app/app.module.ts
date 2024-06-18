import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductFormComponent } from './home/product-form/product-form.component';
import { AgGridModule } from 'ag-grid-angular';
import { CategoryListComponent } from './home/category-list/category-list.component';
import { CategoryFormComponent } from './home/category-form/category-form.component';
import { SupplierListComponent } from './home/supplier-list/supplier-list.component';
import { SupplierFormComponent } from './home/supplier-form/supplier-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    CategoryListComponent,
    CategoryFormComponent,
    SupplierListComponent,
    SupplierFormComponent,
    HomeComponent
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
