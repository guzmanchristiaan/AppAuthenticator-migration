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
  {
    path: 'condiciones',
    loadChildren: () => import('./condiciones/condiciones.module').then( m => m.CondicionesPageModule)
  },
  {
    path: 'desafiliar',
    loadChildren: () => import('./desafiliar/desafiliar.module').then( m => m.DesafiliarPageModule)
  },
  {
    path: 'gc',
    loadChildren: () => import('./gc/gc.module').then( m => m.GcPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'push',
    loadChildren: () => import('./push/push.module').then( m => m.PushPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
