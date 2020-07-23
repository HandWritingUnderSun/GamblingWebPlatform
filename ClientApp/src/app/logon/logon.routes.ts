import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { LogonComponent } from './logon.component';

export const logonroutes: Routes = [
  {
    path: 'logon',
    component: LogonComponent,
  },
  {
    path: 'counter',
    pathMatch: 'full',
    component: CounterComponent
  }
];

export const logonrouting = RouterModule.forRoot(logonroutes);
