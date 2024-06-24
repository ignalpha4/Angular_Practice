import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BookFormComponent } from './book-form/book-form.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { authGuard } from '../authentication/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { AvailableBooksComponent } from './available-books/available-books.component';

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
