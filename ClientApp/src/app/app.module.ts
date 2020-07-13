import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { LogonComponent } from './logon/logon.component';
import { routing } from './app.routes';

import { AuthService } from './auth/auth.service'; 

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    routing
  ],
  providers: [{ provide: 'auth', useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
