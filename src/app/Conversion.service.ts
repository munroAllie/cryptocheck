import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Ticker} from './TickerType';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConversionService{

    ticker: Ticker[]; 

    constructor(public http: Http) {}
    
    getFullTicker(): Promise<Ticker[]> {
        return this.http.get('https://poloniex.com/public?command=returnTicker')
            .toPromise()
            .then(response => response.json() as Ticker[]);
    }// Get Current Ticker

    getCurrentTicker(name1:string) {
        this.getFullTicker() //Sends a request for the ticker information
                            .then(res => { this.ticker = res;
                                console.log(this.ticker[name1]);
                               console.log(this.ticker[name1].last);
                                         }//End the "res"" fuction      
                                  )//Ends the "then"function
  }//Ends the GetCurrentTicker Functions
}
  

