import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Ticker} from './TickerType';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConversionService{

    ticker: Ticker[]; 

    constructor(public http: Http) {}
    
    getFullTicker() {
        return this.http.get('https://poloniex.com/public?command=returnTicker')
            .map(response => response.json() as Ticker[]);
    }// Get Current Ticker

    getFullCurrencyExchange(){
        return this.http.get('http://api.fixer.io/latest?base=USD')
            .map(response=> response.json())
    }
}
  

