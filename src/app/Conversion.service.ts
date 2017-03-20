import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ConversionService{
    constructor(public http: Http) {}
    
    getCurrentTime(){
        return this.http.get('https://poloniex.com/public?command=returnTicker')
            .map(res => res.json());
    }
}
  

