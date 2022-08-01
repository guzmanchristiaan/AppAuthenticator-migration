import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesafiliarPage } from './desafiliar.page';

const routes: Routes = [
  {
    path: '',
    component: DesafiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafiliarPageRoutingModule {}
