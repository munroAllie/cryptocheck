import { Component, OnInit } from '@angular/core';
import { Ticker } from '../TickerType'; 
import { ConversionService } from '../Conversion.service';
import {Observable} from 'rxjs/Rx';
import {resultsType} from './resultsTypeInterface';
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit{

//Will hold the data from the JSON file


  // Variables for front end
 cryptoSelected : boolean = false;
 regSelected : boolean = false;
 step2AOptions : any[] = [
      {name: "make a selection..."},
      {name: "Bitcoin"},
      {name: "DASH"},
      {name: "Etherium"}  
    ]; // step2AOptions
 step2BOptions : any[] = [
      {name: "make a selection..."},
      {name: "CAD"},
      {name: "USD"} 
    ]; // step2BOptions
 step2Selection: string;
 holdings: number = 10;

coins: any[] = ["BTC_ETH", "BTC_DASH"];
currencies: any[] = ["CAD"];
ticker: Ticker[];
coinResults: resultsType[] =[]; 
currencyExchange:any[] = [];   

  constructor( private conversionService: ConversionService ) { 
    
  }
    ngOnInit(){
      this.conversionService.getFullTicker().subscribe((res) => {this.ticker = res;
      
      for(var j = 0; j<= this.coins.length-1; j++)
      {
        var currencyName: string = this.coins[j];
        if(this.ticker[currencyName])
        {
          var temp = {name: currencyName, amount: this.ticker[currencyName].last}
          this.coinResults.push(temp);
        }
      }//end the for loop   
      }); //end the subscribe function                                                       
     this.conversionService.getFullCurrencyExchange().subscribe( (res) => {this.currencyExchange = res["rates"]
      console.log(this.currencyExchange[this.currencies[0]]);  
    });
  
    }// End OnInit

    Update()
    {
      for(var j = 0; j<= this.coins.length-1; j++)
      {
        
      }//end the for loop

    }
  } 

