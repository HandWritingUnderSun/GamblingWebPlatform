import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LogonComponent
  }
];

export const routing = RouterModule.forRoot(routes);
