import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BookFormComponent } from './book-form/book-form.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  {path:'dashboard',component:NavbarComponent,
    children:[
      {path:"books",component:BookFormComponent},
      {path:"authors",component:AuthorFormComponent},
      {path:"category",component:CategoryFormComponent}
      
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
