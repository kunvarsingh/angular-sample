import { Component, OnInit } from '@angular/core';
import {Router,Params,ActivatedRoute} from '@angular/router';
import {FetchDataService} from '../fetch-data.service';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName:string;
birthday:string;
gender:string;
location:string;
bio:string;

  constructor(private router:Router,private fetchDataService:FetchDataService,private activatedRoute: ActivatedRoute,
  	private gs: GlobalServiceService) {
 		
  	 }

	ngOnInit() {
	//intialize the param here:	
	 let userId =this.activatedRoute.snapshot.queryParams['id'];
        console.log(userId);
		// this.activatedRoute.params.subscribe((params: Params) => {
  //       let userId = params['id'];
  //     });

	this.fetchDataService.getUserBioData(userId)
	.subscribe(res =>{
				if(res.Result.length>0){
				this.userName=res.Result[0].user_name;	
				this.bio=res.Result[0].biography;	
				this.birthday=res.Result[0].birthday;
				this.location=res.Result[0].user_location;
				this.gender=res.Result[0].gender;
				}
		 	},
		 	error=>{console.log("i am getCASPIO error:")});
	}

	logOut(){
		//clear all the local storage:
		localStorage.clear();
		this.router.navigate(["/login"]);
	}

}
