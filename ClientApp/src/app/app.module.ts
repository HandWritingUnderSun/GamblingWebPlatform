import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { HomeComponent } from './home/home.component';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';
//import { ExcelInterviewComponent } from './ExcelManager/ExcelInterview/ExcelInterview.component';
import { LogonComponent } from './logon/logon.component';
import { routing } from './app.routes';

import { AuthService } from './auth/auth.service'; 

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [{ provide: 'auth', useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
