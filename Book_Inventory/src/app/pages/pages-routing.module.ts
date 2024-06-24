import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { BookFormComponent } from './book-form/book-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
    children:[
      {path:"home",component:HomepageComponent},
      {path:"booklist",component:AvailableBooksComponent},
      {path:"books",component:BookFormComponent,canActivate:[authGuard],data :{roles:['admin']}},
      {path:"authors",component:AuthorFormComponent},
      {path:"category",component:CategoryFormComponent,canActivate:[authGuard],data:{roles:['admin']}}
    ],
    canActivate:[authGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
