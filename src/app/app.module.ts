import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';

import { SuccessAlertComponent } from './assignment1/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    Assignment1Component,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
