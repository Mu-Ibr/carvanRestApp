import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerMenuPageRoutingModule } from './manager-menu-routing.module';

import { ManagerMenuPage } from './manager-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerMenuPageRoutingModule
  ],
  declarations: [ManagerMenuPage]
})
export class ManagerMenuPageModule {}
