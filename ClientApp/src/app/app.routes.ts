import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

export const routing = RouterModule.forRoot(routes);
