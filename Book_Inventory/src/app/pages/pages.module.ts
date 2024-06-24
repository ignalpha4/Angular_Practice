import { EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { BookListComponent } from './book-list/book-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    BookFormComponent,
    BookListComponent,
    AuthorFormComponent,
    AuthorListComponent,
    CategoryFormComponent,
    CategoryListComponent,
    HomepageComponent,
    AvailableBooksComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    AgGridAngular,
    FormsModule
  ]
})
export class PagesModule { }
