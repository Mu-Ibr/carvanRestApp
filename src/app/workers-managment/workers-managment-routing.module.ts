import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersManagmentPage } from './workers-managment.page';

const routes: Routes = [
  {
    path: '',
    component: WorkersManagmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersManagmentPageRoutingModule {}
