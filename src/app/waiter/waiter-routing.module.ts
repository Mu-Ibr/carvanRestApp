import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaiterPage } from './waiter.page';

const routes: Routes = [
  {
    path: '',
    component: WaiterPage
  },
  {
    path: 'order-waiter',
    loadChildren: () => import('./order-waiter/order-waiter.module').then( m => m.OrderWaiterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterPageRoutingModule {}
