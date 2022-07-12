import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-afiliacion',
    loadChildren: () => import('./registro-afiliacion/registro-afiliacion.module').then( m => m.RegistroAfiliacionPageModule)
  },
  {
    path: 'bandeja-menu',
    loadChildren: () => import('./bandeja-menu/bandeja-menu.module').then( m => m.BandejaMenuPageModule)
  },
  {
    path: 'tk',
    loadChildren: () => import('./tk/tk.module').then( m => m.TkPageModule)
  },
  {
    path: 'tk-qr',
    loadChildren: () => import('./tk-qr/tk-qr.module').then( m => m.TkQrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
