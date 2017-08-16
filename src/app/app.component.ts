import { Component } from '@angular/core';
import {FetchDataService} from './fetch-data.service';
import { GlobalServiceService } from './global-service.service';
import { user } from './Models/user';
import { TableComponent } from './Table/table/table.component';

import {  Http,  Headers,  RequestOptions,  Response} from '@angular/http';
import {  Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
body:string="grant_type=client_credentials&client_id=fd8f3ebea41547d59f6b58072064412fe364a4903b77cd44d2&client_secret=7f4075f3bc8f4ef6a01004bfb4a5e0c633bdc4f2c9007fd319";
  myHero:string;
  heroes: any[];
  degination: any[];
  TableArray:any[];
  value:any;
  User = new user();
  deleteUserName:string;
  title = 'app';


  constructor(private location:Location,private fetchDataService:FetchDataService,private gs: GlobalServiceService,private http: Http,private toasterService: ToasterService){
		 this.heroes=['Windstorm','Bombasto','Magneta','Tornado'];
		 this.degination=['Developer','Engineer','Doctor','Teacher'];
		 this.TableArray=['S','A','B','C','D'];
		 console.log("Called");
		this.http.post(this.gs.baseUrl+'/oauth/token',this.body)
	    	.map((res:Response)=>{
	    		console.log("sfffffffffffff");
	        	return res.json();
      		})
      		.subscribe(res =>{
	        localStorage.setItem("auth_Token",res.access_token);

      			console.log(res.access_token);
      		});

      		console.log("External URL:"+this.location.prepareExternalUrl(location.path()))

	}

//Call for insertCASPIO
insertCASPIO(){
this.fetchDataService.insertINTOCaspio(this.User)
  .subscribe(res=>{
  	console.log(res);
  },
  error=>{
    alert("Error")
  },
  ()=>{
  	console.log("hdkhskdgisfdt");
  }
  	);
}

//END Call--

 popToast() {
        // console.log(type, title, body);
        this.toasterService.pop('success', 'Args Title', 'Args Body');
        this.toasterService.pop('error', 'Args Title', 'Args Body');
        this.toasterService.pop('alert', 'Args Title', 'Args Body');
        // this.toasterService.pop(type, title, body);
    }

//Call for getCASPIO
getCASPIO(){
	 this.popToast();
	this.fetchDataService.getUsetFromCaspio()
	.subscribe(res =>{
	 			console.log("Get Data getCASPIO:"+res.Result);
	 			for(let i=0;i<res.Result.length;i++){
	 				 this.heroes.push(res.Result[i].user_name);
	 			}
	 		 },
	 		 error=>{console.log("i am getCASPIO error:")});
}
//END Call--

deleteCASPIO(){
this.fetchDataService.deleteUserFromCaspio(this.deleteUserName)
.subscribe(res=>{
},
error=>{
	console.log("Delete from");
})
}
//END Call--

	 clickMe(){
	 	console.log(this.gs.sep); 
	 	// .subscribe(res =>{
	 	// 		this.value=res;
	 	// 		console.log("Get Data :"+this.value);
	 	// 	 });
	}

}


