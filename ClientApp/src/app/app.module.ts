import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { LogonComponent } from './logon/logon.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ExcelInterviewComponent } from './ExcelManager/ExcelInterview/ExcelInterview.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { routing } from './app.routes';

import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    HomeComponent,
    NavMenuComponent,
    ExcelInterviewComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    routing
  ],
  providers: [{ provide: 'auth', useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
