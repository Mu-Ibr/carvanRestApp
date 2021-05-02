import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiftManagmentPageRoutingModule } from './shift-managment-routing.module';

import { ShiftManagmentPage } from './shift-managment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftManagmentPageRoutingModule
  ],
  declarations: [ShiftManagmentPage]
})
export class ShiftManagmentPageModule {}
