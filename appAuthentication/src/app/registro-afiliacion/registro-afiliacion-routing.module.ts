import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAfiliacionPage } from './registro-afiliacion.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAfiliacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAfiliacionPageRoutingModule {}
