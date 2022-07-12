import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAfiliacionPageRoutingModule } from './registro-afiliacion-routing.module';

import { RegistroAfiliacionPage } from './registro-afiliacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAfiliacionPageRoutingModule
  ],
  declarations: [RegistroAfiliacionPage]
})
export class RegistroAfiliacionPageModule {}
