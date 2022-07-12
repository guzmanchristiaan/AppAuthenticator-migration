import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BandejaMenuPageRoutingModule } from './bandeja-menu-routing.module';

import { BandejaMenuPage } from './bandeja-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BandejaMenuPageRoutingModule
  ],
  declarations: [BandejaMenuPage]
})
export class BandejaMenuPageModule {}
