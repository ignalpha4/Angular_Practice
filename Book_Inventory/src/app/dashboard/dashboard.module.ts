import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BookFormComponent } from './book-form/book-form.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { AgGridAngular } from 'ag-grid-angular';


@NgModule({
  declarations: [
    NavbarComponent,
    BookFormComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    AgGridAngular
  ]
})
export class DashboardModule { }