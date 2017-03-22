import { Component } from '@angular/core';
import {ConversionService} from './Conversion.service'; //Imports the service that this component will use to get the data from poloniex
import {Ticker} from './TickerType'; //Imports the Model Ticker that holds the format of the JSON file
import {StepsComponent} from './steps/steps.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConversionService]
})
export class AppComponent {


 ticker: Ticker[]; //Will hold the data from the JSON file

 
  constructor(private conversionService: ConversionService){
   
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


