import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    SidebarComponent,
    ProductListComponent,
    CategoryListComponent,
    SupplierListComponent,
    SupplierFormComponent,
    CategoryFormComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    AgGridModule,
    BrowserModule,

  ]
})
export class DashboardModule { }
