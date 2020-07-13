import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LogonComponent
  },
  {
    path: 'nav-menu',
    component: NavMenuComponent
  }
];

export const routing = RouterModule.forRoot(routes);
