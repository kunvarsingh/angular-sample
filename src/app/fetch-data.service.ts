import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/http';
import {  Http,  Headers,  RequestOptions,  Response} from '@angular/http';
import { GlobalServiceService } from './global-service.service';
import {  Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class FetchDataService {
 body:string="grant_type=client_credentials&client_id=fd8f3ebea41547d59f6b58072064412fe364a4903b77cd44d2&client_secret=7f4075f3bc8f4ef6a01004bfb4a5e0c633bdc4f2c9007fd319";

  constructor(private http: Http,private gs:GlobalServiceService) {
    this.http.post(this.gs.baseUrl+'/oauth/token',this.body)
    .map((res:Response)=>{
        localStorage.setItem("auth_Token",res.json());
        return res.json();
      })
   }

 createAuthorizationHeader(headers: Headers) {
    const token = localStorage.getItem('authToken');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer 48STruIaJecgObX5SBq46rMOTmp6YjHPqso5mplQGJIcgYg8FHIECdkCX2KbG8IcluJVpPuB2PUZdjI2uew3DEuFs8ksSvmgovyC7-NCas6cdFstnAbN7l17S0L_tutcbnI4_taUw83njkSzTWvKb0lCJR-fdDY8ye26e5sxeNQrCQxpzFaZvOGXJRp_AHfVWedWYfC-JuSjW3_Fy8yJ3d38p8vk1LBqFlDTyEVVCR9t0-AvMeX95bbIn8AZT_k967HlHlaVjcFJxWY_6RJ2zHeddPngL23-LUL_hrLKZDsKLtzhjkQALxwtfT0KllxRDe5W8cuHcvWPZzaUybhTjE6p8Btniy5AN7F69v0CFTKn2vjlS0Wrb7ffgFhPIM2rS5N82NKTjYyCH5-g7S8EQg');
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
    return this.http.get(this.gs.baseUrl+'/rest/v1/tables/user_Login_Table/rows',options)
    .map((res:Response)=>{ return res.json();}) 
}
 //END Section--


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
