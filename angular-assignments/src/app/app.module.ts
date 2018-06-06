import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {global} from '@angular/core/src/util';

import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

import { SuccessAlertComponent } from './assignment1/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { CommonModule } from '@angular/common';
import {Assignment4Component} from './assignment4/assignment4.component';
import {GameControlComponent} from './assignment4/game-control/game-control.component';
import {OddComponent} from './assignment4/odd/odd.component';
import {EvenComponent} from './assignment4/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    Assignment1Component,
    SuccessAlertComponent,
    WarningAlertComponent,
      Assignment3Component,
      Assignment4Component,
      GameControlComponent,
      OddComponent,
      EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
