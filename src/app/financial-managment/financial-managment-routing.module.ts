import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialManagmentPage } from './financial-managment.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialManagmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialManagmentPageRoutingModule {}
