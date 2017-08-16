import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GallaryComponent } from './gallary/gallary.component';

import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { GlobalServiceService } from './global-service.service';

import  {routing} from './app.routing.config';
import {HttpModule} from '@angular/http';
import { Http,  Headers,  RequestOptions,  Response} from '@angular/http';

import {FetchDataService} from './fetch-data.service';
import { TableComponent } from './Table/table/table.component';
import  {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ToasterModule } from 'angular2-toaster';
import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { AddpostComponent } from './addpost/addpost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TableComponent,
    HomeComponent,
    GallaryComponent,
    ContactsComponent,
    HeaderComponent,
    AddpostComponent
  ],
  imports: [
  ToasterModule,
    BrowserModule,
    RouterModule,
    routing,
    FormsModule,ReactiveFormsModule,
    HttpModule
  ],
  providers: [FetchDataService,GlobalServiceService,ToasterService],
  bootstrap: [AppComponent]
})

export class AppModule {
 }
