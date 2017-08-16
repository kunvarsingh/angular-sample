import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FetchDataService} from '../fetch-data.service';
import { GlobalServiceService } from '../global-service.service';
import { user } from '../Models/user';
import { RouterModule, Router } from '@angular/router';
import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent  {
registerForm: FormGroup;
loginForm: FormGroup;
loaderImage:string;
loader: boolean = true;
isError: boolean = true;
User = new user();


  constructor(public _fb: FormBuilder,private fetchDataService:FetchDataService,
  	private gs: GlobalServiceService,private router:Router,private toasterService: ToasterService) { 
	this.loaderImage="https://loading.io/assets/img/landing/curved-bars.svg";
	this.loader=false;
  this.isError=false;
  }

 
}
