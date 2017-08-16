import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 @Input() TableData: any[];

constructor() { 

  }

delete(index1:any){
debugger;
	var index = this.TableData.indexOf(this.TableData[0]);
	if (index > -1) {
    this.TableData.splice(index, 1);
}
console.log("Table data::"+this.TableData[0]+"  Index:"+index1);
}
  ngOnInit() {
  }

}
