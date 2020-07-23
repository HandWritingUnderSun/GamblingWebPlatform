import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { HomeComponent } from './home/home.component';
import { LogonComponent } from './logon/logon.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent } from './counter/counter.component';


import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    HomeComponent,
    AboutComponent,
    SigninComponent,
    NavMenuComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [{ provide: 'auth', useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
