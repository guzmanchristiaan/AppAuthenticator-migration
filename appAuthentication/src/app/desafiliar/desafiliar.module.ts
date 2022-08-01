import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesafiliarPageRoutingModule } from './desafiliar-routing.module';

import { DesafiliarPage } from './desafiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesafiliarPageRoutingModule
  ],
  declarations: [DesafiliarPage]
})
export class DesafiliarPageModule {}
