import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GcPage } from './gc.page';

const routes: Routes = [
  {
    path: '',
    component: GcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GcPageRoutingModule {}
