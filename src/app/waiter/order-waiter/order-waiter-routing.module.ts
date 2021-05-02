import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderWaiterPage } from './order-waiter.page';

const routes: Routes = [
  {
    path: '',
    component: OrderWaiterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderWaiterPageRoutingModule {}
