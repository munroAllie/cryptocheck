import { Component, OnInit } from '@angular/core';
import { Ticker } from '../TickerType';
import { ConversionService } from '../Conversion.service';
import { Observable } from 'rxjs/Rx';
import { coinResultsType } from './resultsTypeInterface';
import { ExchangeType } from './ExchangeTypeInterface';
import { Title } from '@angular/platform-browser';
import { WindowScrollService } from '../window-scroll.service';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
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
 holdings: number; //The amount of money you have inputed.

// DONT FORGET TO ADD THE COIN OR CURRENCY BELOW IN THE PROPER FORMAT (CHECK THE TICKER OR CURRENCY EXCHANGE FOR FORMAT)
coins: any[] = ["BTC_ETH", "BTC_DASH", 'BTC_BTC' ]; //holds the coin as string in the format of the ticker name
currencies: any[] = ["CAD", "EUR", 'USDT']; //hold the currencies as a string in the format of currencyExchange
ticker: Ticker[]; // Holds the exchange values for the coins
currencyExchange: ExchangeType[] = [];   //Holds the exchange values for the currencies
coinResults: coinResultsType[] = []; //Holds all the names and converted values (DISPLAY THIS IN THE DOM)
beforeCoinResults: coinResultsType[] = [];
afterCoinResults: coinResultsType[] = [];


interval: any;
navIsFixed: boolean;
amountnew: number;

beforeFilled: boolean;
afterFilled: boolean;
match: boolean;
increase: boolean = false;
decrease: boolean = false;

  constructor(private conversionService: ConversionService, private windowscrollservice: WindowScrollService, private titleService: Title) {
  }
  callAPI(){  
    this.convert();
    // Tells me beforeCoinResults if it is set
    if(this.beforeCoinResults[1]){
      //console.log(this.beforeCoinResults[0].name + " : " + this.beforeCoinResults[0].amount);
      this.beforeFilled = true;
    } // Tells me afterCoinResults if it is set
    if(this.afterCoinResults[1]){
      //onsole.log(this.afterCoinResults[0].name + " : " + this.afterCoinResults[0].amount);
      this.afterFilled = true;
    } // if after coins afterFilled

/*
    // Tells me beforeCoinResults and afterCoinResults don't match after they have been set
    if(this.beforeFilled && this.afterFilled){
      if(this.afterCoinResults[0].amount != this.beforeCoinResults[0].amount){
        this.match = false;
          console.log("We don't match");
      } // if
    } // if they don't match

      if(this.beforeFilled && this.afterFilled){
        if(this.afterCoinResults[0].amount === this.beforeCoinResults[0].amount){
          this.match = true;
            console.log("We match");
        } //if
      } // if // if thiey match

*/

      for(let i = 0; i < this.coinResults.length; i ++){
        if(this.beforeFilled && this.afterFilled){
         // console.log(this.beforeCoinResults[i]);
          if(this.beforeCoinResults[i].amount < this.afterCoinResults[i].amount){
            this.coinResults[i].decrease = false;
            this.coinResults[i].increase = true;
           //console.log("I have increased");
          } else if(this.beforeCoinResults[i].amount > this.afterCoinResults[i].amount) {
             this.coinResults[i].increase = false;
            this.coinResults[i].decrease = true;
           //console.log("I have decreased");
          } // else if
        } // if
       //console.log(this.coinResults[0].name + " has : " + this.coinResults[0].decrease)
      } // for
  }  // call API

    ngOnInit(){

// logic for Sticky Heacer
        this.interval = setInterval(() => {
        this.windowscrollservice.onWindowScroll() ;
        this.navIsFixed = this.windowscrollservice.navIsFixed;
    }, 10);

    setInterval(() => {
      if(this.holdings){
        this.callAPI()
      };
    }, 1000);
 
 //Subscribe
      setInterval(()=> {
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
       //end the subscribe function                                                       
      });
     this.conversionService.getFullCurrencyExchange().subscribe( (res) => {this.currencyExchange = res["rates"];
     this.currencyExchange['USDT'] = 1;
    });
    },1000);
      
    }// End OnInit

// logic block for conversion
    convert(){
      this.beforeCoinResults = this.coinResults;
      this.coinResults = [];

      if(this.cryptoSelected && this.step2Selection){
        //convert all the crypto to currencies
        for (var i = 0; i<= this.currencies.length -1 ; i++){
          var tempName = this.currencies[i] as string;
          this.coinResults.push({
            name: this.convertName(tempName as string),
            amount: Math.round(this.holdings * this.ticker[this.convertName(this.step2Selection)].last * this.ticker['USDT_BTC'].last* this.currencyExchange[tempName]*100)/100,
            increase: false,
            decrease: false
        }
          ); // push
        } // for

        //convert all the crypto to crypto
        for(var i = 0 ; i <= this.coins.length - 1; i++){
          var tempName = this.coins[i] as string;
          this.coinResults.push({
            name: this.convertName(tempName as string), 
            amount: Math.round(this.holdings * this.ticker[this.convertName(this.step2Selection)].last / this.ticker[tempName].last*100000000)/100000000,
            increase: false,
            decrease: false
           }) // push   
        } // for
      } // if cryptoselected

      if(this.regSelected){
            //convert currency to currency
            for (var i = 0; i<= this.currencies.length -1 ; i++){
            var tempName = this.currencies[i] as string;
            this.coinResults.push({
              name: this.convertName(tempName as string),
              amount: Math.round(this.holdings / this.currencyExchange[this.convertName(this.step2Selection)] * this.currencyExchange[tempName]*100)/100,
              increase: false,
              decrease: false
              }) // push
             } // for
      
             //convert currency to crypto
            for(var i = 0 ; i <= this.coins.length - 1; i++){
              var tempName = this.coins[i] as string;
              this.coinResults.push({
                name: this.convertName(tempName as string), 
                amount: Math.round(this.holdings / this.currencyExchange[this.convertName(this.step2Selection)] / this.ticker['USDT_BTC'].last / this.ticker[tempName].last*100000000)/100000000,
                increase: false,
                decrease: false
                });  //push 
        } // for
      }// if   
       this.afterCoinResults = this.coinResults;
  }// end convert

  


// Logic Block for converting names
    convertName(name: string)
    {
      switch(name){

      case 'Bitcoin':
        return ('BTC_BTC');
      case 'BTC_BTC':
        return ('Bitcoin');


      case 'DASH':
        return ('BTC_DASH');
      case 'BTC_DASH':
        return ('DASH');

      case 'Etherium':
        return ('BTC_ETH');
      case 'BTC_ETH':
        return ('Etherium');

      case 'USDT':
        return ('USDT');
      case 'CAD':
        return ('CAD');
      case 'EUR':
        return ('EUR');
    }//END SWITCH
  }//END CONVERTNAM



// Logic Block for setting title
  pinnedCoinAmount: number; // is Used by the DOM to see what item is pinned.
  updateTitle: any; // used to give the interval an ID

// gets the value for the browser title and ensure it updates as the API chanhes.
  pinTitle(amount: number, name: string) {
    clearInterval(this.updateTitle);
    this.updateTitle = setInterval(()=>{
      for(var i = 0; i<= this.coinResults.length; i++){
        if(name == this.coinResults[i].name){
          this.pinnedCoinAmount = this.coinResults[i].amount;
          this.setTitle(this.coinResults[i].name + " - " + this.coinResults[i].amount.toString());
        } // if
      } // for
    }, 100); // interval
  } // pinTitle

 // sets the title of the browser tab 
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  } // set title



// Logic Block for Instructions button
  instructionsToggle() {
    if (this.instructions) {
      this.instructionsLabel = "Close Instructions";
    }
    else {
      this.instructionsLabel = "What is this?";
    } // else
  } // if
} // instruction toggle label



