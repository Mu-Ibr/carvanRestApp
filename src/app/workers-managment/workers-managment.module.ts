import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkersManagmentPageRoutingModule } from './workers-managment-routing.module';

import { WorkersManagmentPage } from './workers-managment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkersManagmentPageRoutingModule
  ],
  declarations: [WorkersManagmentPage]
})
export class WorkersManagmentPageModule {}
