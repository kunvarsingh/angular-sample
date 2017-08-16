import { Injectable } from '@angular/core';
import {  Http,  Headers,  RequestOptions,  Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalServiceService {
 sep='kunvar';
 version: string="22.2.2"; 
 baseUrl: string="https://c5ctb056.caspio.com";
clientID="3f5d082b35ea41d5a7fb577fbe8f01a1a1c42452c82189236f";
secretID="3e3a2ab597d04d2aa0a0501195a5b61a0a24440b4940e48775";
body:string;

  constructor(private http: Http) {
  	this.body="grant_type=client_credentials"+"&client_id="+this.clientID+"&client_secret="+this.secretID;
   
   }

   getToken(){
   	debugger;
    return this.http.post('https://c5ctb056.caspio.com/oauth/token',this.body)
    .map((res:Response)=>{ 
    	localStorage.setItem('authToken',res.json());
    	return res.json();
    });	
   }

}
