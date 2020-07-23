import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { logonrouting } from './logon.routes';
import { CounterComponent } from '../counter/counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    logonrouting
  ]
})
export class LogonModule { }
