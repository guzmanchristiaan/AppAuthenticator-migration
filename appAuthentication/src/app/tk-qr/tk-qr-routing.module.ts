import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TkQrPage } from './tk-qr.page';

const routes: Routes = [
  {
    path: '',
    component: TkQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TkQrPageRoutingModule {}
