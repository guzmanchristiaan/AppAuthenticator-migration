import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TkPage } from './tk.page';

const routes: Routes = [
  {
    path: '',
    component: TkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TkPageRoutingModule {}
