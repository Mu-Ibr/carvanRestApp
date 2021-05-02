import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerMenuPage } from './manager-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerMenuPageRoutingModule {}
