import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderWaiterPageRoutingModule } from './order-waiter-routing.module';

import { OrderWaiterPage } from './order-waiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderWaiterPageRoutingModule
  ],
  declarations: [OrderWaiterPage]
})
export class OrderWaiterPageModule {}
