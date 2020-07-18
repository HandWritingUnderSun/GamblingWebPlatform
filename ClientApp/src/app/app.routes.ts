import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ExcelInterviewComponent } from './ExcelManager/ExcelInterview/ExcelInterview.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

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
  },
  {
    path: 'ExcelManager/ExcelInterview',
    component: ExcelInterviewComponent
  },
  {
    path: 'pages/welcome',
    component: WelcomeComponent,
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  }
];

export const routing = RouterModule.forRoot(routes);
