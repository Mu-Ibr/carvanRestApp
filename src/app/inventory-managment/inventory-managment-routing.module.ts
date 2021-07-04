import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryManagmentPage } from './inventory-managment.page';

const routes: Routes = [
  {
    path: '',
    component: InventoryManagmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryManagmentPageRoutingModule {}
