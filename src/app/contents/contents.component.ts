import { Component, OnInit } from '@angular/core';
import { Ticker } from '../TickerType'; 
import { ConversionService } from '../Conversion.service';
import {Observable} from 'rxjs/Rx';
import {coinResultsType} from './resultsTypeInterface';
import {ExchangeType} from './ExchangeTypeInterface';
import { Title }     from '@angular/platform-browser';
import { WindowScrollService } from '../window-scroll.service';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit{

//Will hold the data from the JSON file


  // Variables for front end


 instructions: boolean = false;
 instructionsLabel: string = "What is this?";
 pageTitle: string = "Cryptocheck.io";


 cryptoSelected : boolean = false; //Determines if crypto is selected
 regSelected : boolean = false; // Determines if currenecy s selected
 
 //ADD IN ANY EXTRA CURRENCIES OR COINS YOU WANT (ALSO ADD IT IN THE COINS AND CURRENCY ARRAY BELOW)
 //ALSO GO TO THE CONVERTNAME FUCTION AND ADD IN THE APPROPRIATE NAME (VERY BOTTOM OF FILE
 step2AOptions : any[] = [
      {name: "make a selection..."},
      {name: "DASH"},
      {name: "Etherium"},
      {name: "Bitcoin"}  
    ]; // step2AOptions
 step2BOptions : any[] = [
      {name: "make a selection..."},
      {name: "CAD"},
      {name: "USDT"} 
    ]; // step2BOptions



 step2Selection: string; //Holds the value of the currency you have selected.
 holdings: number = 10; //The amount of money you have inputed.

// DONT FORGET TO ADD THE COIN OR CURRENCY BELOW IN THE PROPER FORMAT (CHECK THE TICKER OR CURRENCY EXCHANGE FOR FORMAT)
coins: any[] = ["BTC_ETH", "BTC_DASH", 'BTC_BTC' ]; //holds the coin as string in the format of the ticker name
currencies: any[] = ["CAD", "EUR", 'USDT']; //hold the currencies as a string in the format of currencyExchange
ticker: Ticker[]; // Holds the exchange values for the coins
currencyExchange: ExchangeType[] = [];   //Holds the exchange values for the currencies
coinResults: coinResultsType[] = []; //Holds all the names and converted values (DISPLAY THIS IN THE DOM)


interval: any;
navIsFixed: boolean;
amountnew: number;

increase(amount: number){
  this.amountnew = amount +1.0;
  console.log(amount);
  console.log(this.amountnew);
}
decrease(amount: number){
  this.amountnew = amount -1.0;
  console.log(amount);
  console.log(this.amountnew);
}

  constructor( private conversionService: ConversionService, private windowscrollservice: WindowScrollService, private titleService: Title ) { 
    
  }
    ngOnInit(){
   this.interval = setInterval(() => {
        this.windowscrollservice.onWindowScroll() ;
        this.navIsFixed = this.windowscrollservice.navIsFixed;
    }, 10);


      this.conversionService.getFullTicker().subscribe((res) => {this.ticker = res;
      this.ticker['BTC_BTC'] = {
                              id: 1,
                              last: 1,
                              lowestAsk: 1,
                              highestBid: 1,
                              percentChange: 1,
                              baseVolume: 1,
                              quoteVolume: 1,
                              isFrozen: 1,
                              high24hr: 1,
                              low24hr: 1
                               };

      }); //end the subscribe function                                                       
     this.conversionService.getFullCurrencyExchange().subscribe( (res) => {this.currencyExchange = res["rates"];
     this.currencyExchange['USDT'] = 1;
      });
   
    }// End OnInit

    convert()
    { 
      
      this.coinResults = [];
      if(this.cryptoSelected)
      {
        //convert all the crypto to currencies
        for (var i = 0; i<= this.currencies.length -1 ; i++)
        {
          var tempName = this.currencies[i] as string;
          this.coinResults.push(
            {name: this.convertName(tempName as string),
            amount: this.holdings * this.ticker[this.convertName(this.step2Selection)].last * this.ticker['USDT_BTC'].last* this.currencyExchange[tempName]}
          )
        }
        //convert all the crypto to crypto
        for(var i = 0 ; i <= this.coins.length - 1; i++)
        {
          var tempName = this.coins[i] as string;
          
          this.coinResults.push(
            {name: this.convertName(tempName as string), 
             amount: this.holdings * this.ticker[this.convertName(this.step2Selection)].last / this.ticker[tempName].last
           });  
           
        }
      }
      if(this.regSelected)
        {
            //convert currency to currency
            for (var i = 0; i<= this.currencies.length -1 ; i++)
            {
             var tempName = this.currencies[i] as string;
            this.coinResults.push(
                              {name: this.convertName(tempName as string),
                               amount: this.holdings / this.currencyExchange[this.convertName(this.step2Selection)] * this.currencyExchange[tempName]
                              })
             }
            
             //convert currency to crypto
            for(var i = 0 ; i <= this.coins.length - 1; i++)
            {
              var tempName = this.coins[i] as string;
              this.coinResults.push(
               {name: this.convertName(tempName as string), 
                amount: this.holdings / this.currencyExchange[this.convertName(this.step2Selection)] / this.ticker['USDT_BTC'].last / this.ticker[tempName].last

           });  
           
        }

        }
    }// END CONVERT
    convertName(name: string)
    {
      switch(name){
      case 'Bitcoin':
        return ('BTC_BTC');
      case 'BTC_BTC':
        return ('Bitcoin');


      case 'DASH':
        return('BTC_DASH');
      case 'BTC_DASH':
        return('DASH');

      case 'Etherium':
        return('BTC_ETH');
      case 'BTC_ETH':
        return ('Etherium');

      case 'USDT':
        return ('USDT');
      case 'CAD':
        return ('CAD');
      case 'EUR':
        return('EUR');

        }//END SWITCH
    }//END CONVERT
    
    pinnedCoinAmount: string ;
    pinnedCoinName: string ;
    pinnedCoin: string ;
    pinTitle(amount: number, name: string){
      if(amount){
      this.pinnedCoinAmount = amount.toString();
      this.pinnedCoinName = name.toString();
      this.pinnedCoin = this.pinnedCoinName + " - " + this.pinnedCoinAmount;
      this.setTitle(this.pinnedCoin);
    }
  }
    setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  } 
    instructionsToggle(){
      if(this.instructions){
        this.instructionsLabel = "Close Instructions";
      }
      else{
        this.instructionsLabel = "What is this?";
      }
    }
}



