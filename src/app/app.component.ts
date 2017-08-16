import { Component } from '@angular/core';
import {FetchDataService} from './fetch-data.service';
import { GlobalServiceService } from './global-service.service';
import { user } from './Models/user';
import { TableComponent } from './Table/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
loader: boolean = true;
loaderImage:string;
 myHero:string;
  heroes: any[];
  degination: any[];
  TableArray:any[];
 value:any;
  User = new user();
  deleteUserName:string;
  title = 'app';


  constructor(private fetchDataService:FetchDataService,private gs: GlobalServiceService){
		 this.heroes=['Windstorm','Bombasto','Magneta','Tornado'];
		 this.degination=['Developer','Engineer','Doctor','Teacher'];
		 this.TableArray=['S','A','B','C','D'];
		 this.loader=false;
		 this.loaderImage="https://loading.io/assets/img/landing/curved-bars.svg";
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


//Call for getCASPIO
getCASPIO(){
	this.loader=true;
	this.fetchDataService.getUsetFromCaspio()
	.subscribe(res =>{
		this.loader=false;
	 			console.log("Get Data getCASPIO:"+res.Result);
	 			for(let i=0;i<res.Result.length;i++){
	 				 this.heroes.push(res.Result[i].First_Name);
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


