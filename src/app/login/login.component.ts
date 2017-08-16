import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FetchDataService} from '../fetch-data.service';
import { GlobalServiceService } from '../global-service.service';
import { user } from '../Models/user';
import { RouterModule, Router } from '@angular/router';
import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  ngOnInit() {
    this.formInitilization();
  }

  formInitilization(){
    this.loginForm = this._fb.group({
      email: ['kunvarsingh5@gmail.com',[Validators.required]],
      password: ['kunvarsingh5',[Validators.required]]      
    })
  }

logIn(){
this.loader=true;
this.fetchDataService.getUsetFromCaspio()
	.subscribe(res =>{
		this.loader=false;
	 			console.log("Get Data getCASPIO:"+this.loginForm);
         debugger;
	 			for(let i=0;i<res.Result.length;i++){
	 				if (this.loginForm.controls.email.value==res.Result[i].Email) {
	 					this.toasterService.pop('success', 'Message:', 'Successfull login!');
	 					this.router.navigate(["/home"],{queryParams: {id:res.Result[i].userId}});
	 				}
	 				else{
	 				//alert("Error");	
	 				//set the error message 
           this.isError=true;
	 				}
	 			}
         // if(this.isError){
         //   this.toasterService.pop('error', 'Message:', 'Error login!');
         // }
	 		 },
	 		 error=>{console.log("i am getCASPIO error:")});
 }

}
