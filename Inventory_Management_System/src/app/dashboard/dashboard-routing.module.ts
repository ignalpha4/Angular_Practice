import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { authGuardGuard } from '../authentication/auth-guard.guard';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SidebarComponent,
    children: [
      { path: 'products', component: ProductListComponent },
      {
        path: 'suppliers',
        component: SupplierListComponent,
        canActivate: [authGuardGuard],
        data: { roles: ['admin'] }
      },
      {
        path: 'categories',
        component: CategoryListComponent,
        canActivate: [authGuardGuard],
        data: { roles: ['admin'] }
      }
    ],
    canActivate: [authGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
