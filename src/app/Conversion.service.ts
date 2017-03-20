import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Ticker} from './TickerType';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConversionService{

    constructor(public http: Http) {}
    
    getCurrentTicker(): Promise<Ticker[]> {
        return this.http.get('https://poloniex.com/public?command=returnTicker')
            .toPromise()
            .then(response => response.json() as Ticker[]);
    }
}
  

