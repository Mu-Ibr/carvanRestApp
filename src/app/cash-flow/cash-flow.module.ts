import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashFlowPageRoutingModule } from './cash-flow-routing.module';

import { CashFlowPage } from './cash-flow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashFlowPageRoutingModule
  ],
  declarations: [CashFlowPage]
})
export class CashFlowPageModule {}
