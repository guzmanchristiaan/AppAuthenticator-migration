import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TkPageRoutingModule } from './tk-routing.module';

import { TkPage } from './tk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TkPageRoutingModule
  ],
  declarations: [TkPage]
})
export class TkPageModule {}
