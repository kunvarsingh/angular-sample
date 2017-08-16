import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CaspioServiceService {

  constructor(private http:Http) { }

// getData:Array(any) {
//     return this.http.get('https://restcountries.eu/rest/v2/all')
//                .map(res => res.json());
//   }

}
