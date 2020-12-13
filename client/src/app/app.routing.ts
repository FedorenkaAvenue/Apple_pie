import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule)
  },
  {
    path: '',
    component: WrapperComponent,
    canActivateChild: [MetaGuard],
    children: [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }],
  },
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
