import { EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BookFormComponent } from './book-form/book-form.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { AgGridAngular } from 'ag-grid-angular';
import { BrowserModule, EventManager } from '@angular/platform-browser';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorListComponent } from './author-list/author-list.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BookFormComponent,
    BookListComponent,
    AuthorFormComponent,
    AuthorListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    AgGridAngular,
    BrowserModule
  ]
})
export class DashboardModule { }
