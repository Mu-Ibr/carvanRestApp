import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetManagmentPage } from './budget-managment.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetManagmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetManagmentPageRoutingModule {}
