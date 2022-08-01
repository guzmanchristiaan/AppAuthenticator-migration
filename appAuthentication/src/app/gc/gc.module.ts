import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GcPageRoutingModule } from './gc-routing.module';

import { GcPage } from './gc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GcPageRoutingModule
  ],
  declarations: [GcPage]
})
export class GcPageModule {}
