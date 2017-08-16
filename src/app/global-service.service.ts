import { Injectable } from '@angular/core';
import {  Http,  Headers,  RequestOptions,  Response} from '@angular/http';
import {  Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
@Injectable()
export class GlobalServiceService {
 sep='kunvar';
 version: string="22.2.2"; 
 baseUrl: string="https://c0abh551.caspio.com";
 body:string="grant_type=client_credentials&client_id=fd8f3ebea41547d59f6b58072064412fe364a4903b77cd44d2&client_secret=7f4075f3bc8f4ef6a01004bfb4a5e0c633bdc4f2c9007fd319";
  constructor(private http: Http) { }

ngOnInit() {
debugger;
 

  }

}
