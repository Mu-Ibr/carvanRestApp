import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetManagmentPageRoutingModule } from './budget-managment-routing.module';

import { BudgetManagmentPage } from './budget-managment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetManagmentPageRoutingModule
  ],
  declarations: [BudgetManagmentPage]
})
export class BudgetManagmentPageModule {}
