import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/http';
import {  Http,  Headers,  RequestOptions,  Response} from '@angular/http';
import { GlobalServiceService } from './global-service.service';
import {  Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class FetchDataService {

  constructor(private http: Http,private gs:GlobalServiceService) {

   }


 createAuthorizationHeader(headers: Headers) {
  debugger;
    this.gs.getToken();
    const token = localStorage.getItem('authToken');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer 69QHHUiL5jMC0aN8c-4MLuVbVMvQu8A05w3XNgqVOXGFEX5usj3T-F2Rigd-k0z8x8oOWMP1ZzmQTDq4jOA6wPAnWCVszvBtJDoHpzMxA_RvWz3w_qVqLrj-VCwyzCtIw6QedWKbCYw6brB2Oz3crMR1vSrmy2FYAu7m67vH9BBAcWSGykCaQWcDUGVSv0r0yyKYRTmpTOSYbyLkAUyiiS40IRozGJKCe-2tfbGphWVJIAbW1Xf8geEYmrfxqgJSpe6shRS4kZBbY1ueMUxaAtYepQQOLL6ZvQeUxav7CbORO3q_RhIF_A_zcdB0v2XE6_fM2rAqmMXhIcpkxzzMv7VHzbDo0T7xRIu66dkisOaed4arDVKpCH7bCQY_NqHb');
  }

writeHeaders(){
  const headers = new Headers();
 this.createAuthorizationHeader(headers);
 const options = new RequestOptions({headers: headers});
 return options;
}
   
// Method for inserting the value in CASPIO
insertINTOCaspio(user:any){
//let body = 'user_name='+user.userName+'&password='+user.password+'&degination='+user.designation;
const options=this.writeHeaders();
return this.http.post(this.gs.baseUrl+'/rest/v1/tables/user_Login_Table/rows',user,options)
.map((res:Response)=>{res.json();})
}
//END Section--


// Method for inserting the value in CASPIO
getUsetFromCaspio(){
  let userGetQuery='?q={"select:"}';
const options=this.writeHeaders();
    return this.http.get(this.gs.baseUrl+'/rest/v1/tables/User_sign_up/rows',options)
    .map((res:Response)=>{ return res.json();}) 
}
 //END Section--

getContactsList(){
let userGetQuery='?q={"select:"}';
const options=this.writeHeaders();
    return this.http.get(this.gs.baseUrl+'/rest/v1/tables/contacts/rows',options)
    .map((res:Response)=>{ return res.json();}) 
}

addContactsData(data:any){
const options=this.writeHeaders();
return this.http.post(this.gs.baseUrl+'/rest/v1/tables/contacts/rows',data,options)
.map((res:Response)=>{res.json();})
}

deleteContacts(contactId:any){
   let query=`?q={"where":"contactId='`+contactId+`'"}`;
   const options=this.writeHeaders();
   return this.http.delete(this.gs.baseUrl+'/rest/v1/tables/contacts/rows/'+query,options)
     .map((response: Response) => {
     response.json();
     })
     .catch((error:any) => { 
       return Observable.throw(error);
     }); 
}

getUserBioData(userId:any){
let query=`?q={"where":"userId='`+userId+`'"}`;
const options=this.writeHeaders();
    return this.http.get(this.gs.baseUrl+'/rest/v1/tables/user_information/rows/'+query,options)
    .map((res:Response)=>{ return res.json();})   
}
 //Method for inserting the value in CASPIO
  deleteUserFromCaspio(username:any) {
    let query='?q={"where":"user_name="'+username+'""}';
   const options=this.writeHeaders();
	 return this.http.delete('/rest/v1/tables/user_Login_Table/rows/'+query,options)
	 	.map((response: Response) => {
	 	response.json();
	 	})
	 	.catch((error:any) => { 
	 		return Observable.throw(error);
	 	});
  }
 // END Section

}
