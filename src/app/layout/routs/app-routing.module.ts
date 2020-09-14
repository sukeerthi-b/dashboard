import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: '@home/home.module#HomeModule'
  },
  {
    path: 'stream',
    loadChildren: '@stream/stream.module#StreamModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: 'reload'});
