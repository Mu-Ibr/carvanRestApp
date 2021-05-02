import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancialManagmentPageRoutingModule } from './financial-managment-routing.module';

import { FinancialManagmentPage } from './financial-managment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancialManagmentPageRoutingModule
  ],
  declarations: [FinancialManagmentPage]
})
export class FinancialManagmentPageModule {}
