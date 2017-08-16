import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {GallaryComponent} from './gallary/gallary.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AddpostComponent} from './addpost/addpost.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gallary', component: GallaryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'posts', component: AddpostComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
