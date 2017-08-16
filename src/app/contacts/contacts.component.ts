
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FetchDataService} from '../fetch-data.service';
import { GlobalServiceService } from '../global-service.service';
import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;
    movies=[];
    loader:boolean=true;
    loaderImage:string;

  constructor(private _fb: FormBuilder,private fetchDataService:FetchDataService,
  	private gs: GlobalServiceService,private toasterService: ToasterService) { 
		this.loader=true;
		this.loaderImage="https://loading.io/assets/img/landing/curved-bars.svg";
  }

  ngOnInit() {
  	this.formInit();
  }

  formInit(){
    this.contactForm = this._fb.group({
        email: ['', [Validators.required, Validators.minLength(5)]],
    });
//Get the contact list from caspio
    this.contactsList();
 }

	contactsList(){
		this.loader=true;
		this.fetchDataService.getContactsList()
	    	.subscribe(res =>{
			this.loader=false;
				if(res.Result.length>0){
					for(let i=0;i<res.Result.length;i++){
						this.movies.push(res.Result[i]);
			 		}
				}
		 	},
		 	error=>{console.log("i am getCASPIO error:")});
	}

    addContact() {
    let data = {
      contact_email: this.contactForm.controls.email.value,
      contact_name: this.contactForm.controls.email.value.split('@')[0],
      mobile: 8755732315,
      password: 'password',
      is_bookmark: false
    }
    this.movies.push(data);
    this.fetchDataService.addContactsData(data)
      .subscribe(res => {
        this.contactForm.reset();
      },
      err => {
        console.log(err, "Error here");
      })
  	}

	delete(contctId:string){
	this.loader=true;
	this.fetchDataService.deleteContacts(contctId)
	.subscribe(res => {
		this.loader=false;
		this.toasterService.pop('success', 'Message:', 'Successfull deleted!');
		this.movies=[];
		this.contactsList();
		console.log(res);
      },
      err => {
        console.log(err, "Error here");
      })
}

}
