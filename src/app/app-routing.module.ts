import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {CustomersComponent} from './customers/customers.component';
import {BillsComponent} from './bills/bills.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent
  },

  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: "bills",
    component: BillsComponent
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
