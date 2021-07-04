import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryManagmentPageRoutingModule } from './inventory-managment-routing.module';

import { InventoryManagmentPage } from './inventory-managment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryManagmentPageRoutingModule
  ],
  declarations: [InventoryManagmentPage]
})
export class InventoryManagmentPageModule {}
