import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { HomeComponent } from './home/home.component';
import { LogonComponent } from './logon/logon.component';


import { AuthService } from './auth/auth.service';
import { SigninModule } from './signin/signin.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    HomeComponent,
    NavMenuComponent,
    ExcelInterviewComponent,
    WelcomeComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    routing,
    SigninModule,
    AboutModule
  ],
  providers: [{ provide: 'auth', useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
