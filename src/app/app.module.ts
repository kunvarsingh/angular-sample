import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { GlobalServiceService } from './global-service.service';

import  {routing} from './app.routing.config';
import {HttpModule} from '@angular/http';
import { Http,  Headers,  RequestOptions,  Response} from '@angular/http';

import {FetchDataService} from './fetch-data.service';
import { TableComponent } from './Table/table/table.component';
 
import { ToasterModule } from 'angular2-toaster';
import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNewDirectiveDirective } from './my-new-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TableComponent,
    MyNewDirectiveDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,
    HttpModule,
    ToasterModule,
    BrowserAnimationsModule 
  ],
  exports: [
        MyNewDirectiveDirective
    ],
  providers: [FetchDataService,GlobalServiceService,ToasterService],
  bootstrap: [AppComponent]
})

export class AppModule {
 }
