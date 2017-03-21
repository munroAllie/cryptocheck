import { Component } from '@angular/core';
import {ConversionService} from './Conversion.service'; //Imports the service that this component will use to get the data from poloniex
import {Ticker} from './TickerType'; //Imports the Model Ticker that holds the format of the JSON file

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConversionService]
})
export class AppComponent {


 ticker: Ticker[]; //Will hold the data from the JSON file
 step2AOptions : any[];
 step2BOptions : any[];
 step2Selection: string;
 holdings: number;
 CAD: number = 1;
 bitcoin: number = 1283.00;
 
  constructor(private conversionService: ConversionService){
    this.step2AOptions = [
      {name: "make a selection..."},
      {name: "Bitcoin"},
      {name: "DASH"},
      {name: "Etherium"}  
    ]; // step2AOptions

    this.step2BOptions = [
      {name: "make a selection..."},
      {name: "CAD"},
      {name: "USD"} 
    ]; // step2BOptions
  } //Creates a conversionService object so we can call the GetTickerMethod from the service.
  

getCurrentTicker(name1:string,name2:string) {
  
    this.conversionService.getCurrentTicker() //Sends a request for the ticker information
                            .then(res => { this.ticker = res;
                               console.log(name1+"_"+name2)
                               console.log(this.ticker[name1+"_"+name2].last);
                                         }//End the "res"" fuction      
                                  )//Ends the "then"function
  }//Ends the GetCurrentTicker Functions
} //export class


