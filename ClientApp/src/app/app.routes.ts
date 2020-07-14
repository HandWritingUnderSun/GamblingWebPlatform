import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'logon',
    pathMatch: 'full'
  },
  {
    path: 'logon',
    component: LogonComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nav-menu',
    component: NavMenuComponent
  }
];

export const routing = RouterModule.forRoot(routes);
