import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandejaMenuPage } from './bandeja-menu.page';

const routes: Routes = [
  {
    path: '',
    component: BandejaMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BandejaMenuPageRoutingModule {}
