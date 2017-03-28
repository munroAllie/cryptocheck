import { Component, OnInit } from '@angular/core';
import { Ticker } from '../TickerType'; 
import { ConversionService } from '../Conversion.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit{

  ticker: Ticker[];

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

    
btc:string = "BTC_ETH";
eth:string;

 step2BOptions : any[] = [
      {name: "make a selection..."},
      {name: "CAD"},
      {name: "USD"} 
    ]; // step2BOptions
 step2Selection: string;
 holdings: number;


//static rates to be completed by Johns api
 bitcoin: number = 1029.73;
 cad: number = 0.74;
 dash: number = 45;
 etherium: number = 101.56;

 //hold crypto currencies
 dashtousd: number = 0;
 dashtocad: number = 0;
 bittousd: number = 0;
 bittocad: number = 0;
 ethtousd: number = 0;
 ethtocad: number = 0;
 bittodash: number = 0;
 bittoeth: number = 0;
 dashtobit: number = 0;
 dashtoeth: number = 0;
 ethtobit: number = 0;
 ethtodash: number = 0;
 cadtobit: number = 0;
 cadtodash: number = 0;
 cadtoeth: number = 0;
 usdtobit: number = 0;
 usdtodash: number = 0;
 usdtoeth: number = 0;

//hold regular currencies
cadtousd: number = 0;
usdtocad: number = 0;
 

// You have array
 youhaves: any[] = [
        {
        name: String,
        amount: Number
        }
      ]
// You have array
 youcouldhaves: any[] = [
        {
        name: String,
        amount: Number
        }
      ]

// You Have function called when holdings are altered
   youHave(){
     //clears array
     
     this.youhaves.length = 0;
     //is crypto currency selected?
    if (this.cryptoSelected){
      // is Bitcoin selected?
      if(this.step2Selection === "Bitcoin"){
        //Convert to USD
        this.bittousd = (this.holdings * this.bitcoin);
        this.youhaves.push({name: "USD", amount: this.bittousd});
        //Convert to CAD
        this.bittocad = ((this.holdings * this.bitcoin))*this.cad;
        this.youhaves.push({name: "CAD", amount: this.bittocad});
      } 
      // Is DASH selected?
      else if(this.step2Selection === "DASH"){
        //Convert to USD
        this.dashtousd = (this.holdings * this.dash);
        this.youhaves.push({name: "USD", amount: this.dashtousd});
        //Convert to CAD
        this.dashtocad = ((this.holdings * this.dash))*this.cad;
        this.youhaves.push({name: "CAD", amount: this.dashtocad});
      }
      //is Etherium Selected?
      else if(this.step2Selection === "Etherium"){
        //Convert to USD
        this.ethtousd = (this.holdings * this.etherium);
        this.youhaves.push({name: "USD", amount: this.ethtousd});
        //Convert to CAD
        this.ethtocad = ((this.holdings * this.etherium))*this.cad;
        this.youhaves.push({name: "CAD", amount: this.ethtocad});
      }
    } // crypto currency checks
    if(this.regSelected){
      // is CAD selected?
      if(this.step2Selection === "CAD"){
        //Convert to USD
        this.cadtousd = (this.holdings * this.cad);
        this.youhaves.push({name: "USD", amount: this.cadtousd});
      }
      if(this.step2Selection === "USD"){
        //Convert to USD  *** HOW DO YOU DO THE INVERSE?
        this.usdtocad = (this.holdings * this.cad);
        this.youhaves.push({name: "CAD", amount: this.cadtousd});
        }
    } // Reg currency checks
  }; // youHave
  
  // You Have function called when holdings are altered
   youCouldHave(){
     //clears array
     this.youcouldhaves.length = 0;
     //is crypto currency selected?
    if (this.cryptoSelected){
      // is Bitcoin selected?
      if(this.step2Selection === "Bitcoin"){
        //Convert to DASH
        this.bittodash = (this.holdings / this.dash);
        this.youcouldhaves.push({name: "DASH", amount: this.bittodash});
        //Convert to Etherium
        this.bittoeth = (this.holdings / this.etherium);
        this.youcouldhaves.push({name: "ETH", amount: this.bittoeth});
      }
      if(this.step2Selection === "DASH"){
        //Convert to bitcoin
        this.dashtobit = (this.bitcoin / this.holdings);
        this.youcouldhaves.push({name: "Bitcoin", amount: this.dashtobit});
        //Convert to Etherium
        this.dashtoeth = (this.holdings / this.etherium);
        this.youcouldhaves.push({name: "ETH", amount: this.dashtoeth});
      }
      if(this.step2Selection === "Etherium"){
        //Convert to bitcoin
        this.ethtobit = (this.bitcoin / this.holdings);
        this.youcouldhaves.push({name: "Bitcoin", amount: this.ethtobit});
        //Convert to Dash
        this.ethtodash = (this.holdings / this.dash);
        this.youcouldhaves.push({name: "DASH", amount: this.ethtodash});
        }
      } // crypto checks
      if (this.regSelected){
        if(this.step2Selection === "CAD"){
        //Convert to DASH
        this.cadtodash = (this.holdings / this.dash);
        this.youcouldhaves.push({name: "DASH", amount: this.cadtodash});
        //Convert to Etherium
        this.cadtoeth = (this.holdings / this.etherium);
        this.youcouldhaves.push({name: "ETH", amount: this.cadtoeth});
        // convert to bitcoin
        this.cadtobit = (this.holdings / this.bitcoin);
        this.youcouldhaves.push({name: "Bitcoin", amount: this.cadtobit});
        console.log(this.youcouldhaves);
      }
      if(this.step2Selection === "USD")
        //Convert to DASH
        this.usdtodash = (this.holdings / this.dash);
        this.youcouldhaves.push({name: "DASH", amount: this.usdtodash});
        //Convert to Etherium
        this.usdtoeth = (this.holdings / this.etherium);
        this.youcouldhaves.push({name: "ETH", amount: this.usdtoeth});
        // convert to bitcoin
        this.usdtobit = (this.holdings / this.bitcoin);
        this.youcouldhaves.push({name: "Bitcoin", amount: this.usdtobit});
      }
    }

coins: any[] = ["BTC_ETH", "BTC_DASH"];
coinsResults: any[] = [];
    

  constructor( private conversionService: ConversionService ) { 
    
  }
    ngOnInit(){

      setInterval(() => {
        this.coinsResults.length = 0;
        this.coins.forEach((coin, i) => {
          this.conversionService.getCurrentTicker(coin, this.coinsResults);
        });
      }, 1000);
    }
  };

