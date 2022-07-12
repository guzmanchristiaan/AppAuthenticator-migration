import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TkQrPageRoutingModule } from './tk-qr-routing.module';

import { TkQrPage } from './tk-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TkQrPageRoutingModule
  ],
  declarations: [TkQrPage]
})
export class TkQrPageModule {}
