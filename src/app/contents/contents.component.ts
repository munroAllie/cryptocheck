import { Component, OnInit } from '@angular/core';
import { Ticker } from '../TickerType';
import { ConversionService } from '../Conversion.service';
import { Observable } from 'rxjs/Rx';
import { coinResultsType } from './resultsTypeInterface';
import { ExchangeType } from './ExchangeTypeInterface';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  filterType: string;
  filterSearch: string;

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
      {name: "Synereo (AMP)"},
      {name: "Ardor (ARDR)"},
      {name: "Boolberry (BBR)"},
      {name: "Bytecoin (BCN)"},
      {name: "BitCrystals (BCY)"},
      {name: "Belacoin (BELA)"},
      {name: "Bitcoin (BTC)"},  
      {name: "Bitstart (BITS)"},
      {name: "BlackCoin (BLK)"},
      {name: "BitcoinDark (BTCD)"},
      {name: "Bitmark (BTM)"},
      {name: "BitShares (BTS)"},
      {name: "Burst (BURST)"},
      {name: "Coin2.0 (C2)"},
      {name: "CLAMS (CLAM)"},
      {name: "Curecoin (CURE)"},
      {name: "DASH (DASH) "},
      {name: "Decred (DCR)"},
      {name: "DigiByte (DGB)"},
      {name: "Dogecoin (DOGE)"},
      {name: "Einsteinium (EMC2)"},
      {name: "Ethereum Classic (ETC)"},
      {name: "Ethereum (ETH)"},
      {name: "Expanse (EXP)"},
      {name: "Factom (FCT)"},
      {name: "FoldingCoin (FLDC)"},
      {name: "GameCredits (GAME)"},
      {name: "Golem (GNT)"},
      {name: "Gridcoin Research (GRC)"},
      {name: "Huntercoin (HUC)"},
      {name: "Horizon (HZ)"},
      {name: "IO Digital Currency (IOC)"},
      {name: "LBRY Credits (LBC)"},
      {name: "Lisk (LSK)"},
      {name: "Litecoin (LTC)"},
      {name: "MaidSafeCoin (MAID)"},
      {name: "MyriadCoin (MYR)"},
      {name: "Nautiluscoin (NAUT)"},
      {name: "NAVCoin (NAV)"},
      {name: "Neoscoin (NEOS)"},
      {name: "Namecoin (NMC)"},
      {name: "NobleCoin (NOBL)"},
      {name: "DNotes (NOTE)"},
      {name: "NuShares (NSR)"},
      {name: "Nexium (NXC)"},
      {name: "NST (NXT)"},
      {name: "Omni (OMNI)"},
      {name: "PascalCoin (PASC)"},
      {name: "Pinkcoin (PASC)"},
      {name: "PotCoin (POT)"},
      {name: "Peercoin (PPC)"},
      {name: "Qibuck (QBK)"},
      {name: "Qora (QORA)"},
      {name: "Quatloo (QTL)"},
      {name: "Radium (RADS)"},
      {name: "Rubycoin (RBY)"},
      {name: "Augur (REP)"},
      {name: "Riecoin (RIC)"},
      {name: "Steem Dollars (SBD)"},
      {name: "Siacoin (SC)"},
      {name: "Shadow (SDC)"},
      {name: "Storjcoin X (SJCX)"},
      {name: "STEEM (STEEM)"},
      {name: "Stellar (STR)"},
      {name: "Stratis (STRAT)"},
      {name: "Syscoin (SYS)"},
      {name: "SuperNET (UNITY)"},
      {name: "Viacoin (VIA)"},
      {name: "Voxels (VOX)"},
      {name: "VeriCoin (VRC)"},
      {name: "Vertcoin (VTC)"},
      {name: "BitcoinPlus (XBC)"},
      {name: "Counterparty (XCP)"},
      {name: "NEM (XEM)"},
      {name: "Maqi (XMG)"},
      {name: "Monero (XMR)"},
      {name: "Primecoin (XPM)"},
      {name: "Ripple (XRP)"},
      {name: "Vcash (XVC)"},
      {name: "Zcash (ZEC)"}
     
    ]; // step2AOptions
 step2BOptions : any[] = [
      {name: "make a selection..."},
      {name: "Canadian (CAD)"},
      {name: "American (USDT)"},
      {name: "Euro (EUR)"},
      {name: "Austrailian (AUD)"},
      {name: "Buglarian (BGN)"},
      {name: "Brazilian (BRL)"},
      {name: "Swiss Franc (CHF)"},
      {name: "Chinese (CNY)"},
      {name: "Czech (CZK)"},
      {name: "Danish (DKK)"},
      {name: "British Pound (GBP)"},
      {name: "Hong Kong (HKD)"},
      {name: "Croatian (HRK)"},
      {name: "Hungarian (HUF)"},
      {name: "Indonesian (IDR)"},
      {name: "Israeli (ILS)"},
      {name: "Indian (INR)"},
      {name: "Japanese (JPY)"},
      {name: "South Korean (KRW)"},
      {name: "Mexican (MXN)"},
      {name: "Malaysian (MYR)"},
      {name: "Norwegian (NOK)"},
      {name: "New Zealand (NZD)"},
      {name: "Philippine (PHP)"},
      {name: "Polish (PLN)"},
      {name: "Romanian (RON)"},
      {name: "Russian (RUB)"},
      {name: "Swedish (SEK)"},
      {name: "Singapore (SGD)"},
      {name: "Thai (THB)"},
      {name: "Turkish (TRY)"},
      {name: "South African (ZAR)"}
   
    ]; // step2BOptions

 step2Selection: string; //Holds the value of the currency you have selected.
 holdings: number; //The amount of money you have inputed.

// DONT FORGET TO ADD THE COIN OR CURRENCY BELOW IN THE PROPER FORMAT (CHECK THE TICKER OR CURRENCY EXCHANGE FOR FORMAT)
coins: any[] = [
  "BTC_AMP",
  "BTC_ARDR",
  "BTC_BBR",
  "BTC_BCN",
  "BTC_BCY",
  "BTC_BELA",
  "BTC_BITS",
  "BTC_BLK",
  "BTC_BTCD",
  "BTC_BTM",
  "BTC_BTS",
  "BTC_BURST",
  "BTC_C2",
  "BTC_CLAM",
  "BTC_CURE",
  "BTC_DASH",
  "BTC_DCR",
  "BTC_DGB",
  "BTC_DOGE",
  "BTC_EMC2",
  "BTC_ETC",
  "BTC_ETH",
  "BTC_EXP",
  "BTC_FCT",
  "BTC_FLDC",
  "BTC_FLO",
  "BTC_GAME",
  "BTC_GNT",
  "BTC_GRC",
  "BTC_HUC",
  "BTC_HZ",
  "BTC_IOC",
  "BTC_LBC",
  "BTC_LSK",
  "BTC_LTC",
  "BTC_MAID",
  "BTC_MYR",
  "BTC_NAUT",
  "BTC_NAV",
  "BTC_NEOS",
  "BTC_NMC",
  "BTC_NOBL",
  "BTC_NOTE",
  "BTC_NSR",
  "BTC_NXC",
  "BTC_NXT",
  "BTC_OMNI",
  "BTC_PASC",
  "BTC_PINK",
  "BTC_POT",
  "BTC_PPC",
  "BTC_QBK",
  "BTC_QORA",
  "BTC_QTL",
  "BTC_RADS",
  "BTC_RBY",
  "BTC_REP",
  "BTC_RIC",
  "BTC_SBD",
  "BTC_SC",
  "BTC_SDC",
  "BTC_SJCX",
  "BTC_STEEM",
  "BTC_STR",
  "BTC_STRAT",
  "BTC_SYS",
  "BTC_UNITY",
  "BTC_VIA",
  "BTC_VOX",
  "BTC_VRC",
  "BTC_VTC",
  "BTC_XBC",
  "BTC_XCP",
  "BTC_XEM",
  "BTC_XMG",
  "BTC_XMR",
  "BTC_XPM",
  "BTC_XRP",
  "BTC_XVC",
  "BTC_ZEC"
];
currencies: any[] = [
  "CAD",
  "EUR",
  'USDT',
  'AUD',
  'BGN',
  'BRL',
  'CHF',
  'CNY',
  'CZK',
  'DKK',
  'GBP',
  'HKD',
  'HRK',
  'HUF',
  'IDR',
  'ILS',
  'INR',
  'JPY',
  'KRW',
  'MXN',
  'MYR',
  'NOK',
  'NZD',
  'PHP',
  'PLN',
  'RON',
  'RUB',
  'SEK',
  'SGD',
  'THB',
  'TRY',
  'ZAR'
  ]; //hold the currencies as a string in the format of currencyExchange
ticker: Ticker[]; // Holds the exchange values for the coins
currencyExchange: ExchangeType[] = [];   //Holds the exchange values for the currencies
coinResults: coinResultsType[] = []; //Holds all the names and converted values (DISPLAY THIS IN THE DOM)
beforeCoinResults: coinResultsType[] = [];
afterCoinResults: coinResultsType[] = [];


interval: any;

//amount new: number;

beforeFilled: boolean;
afterFilled: boolean;
match: boolean;
increase: boolean = false;
decrease: boolean = false;
type: string;

  constructor(private conversionService: ConversionService, private titleService: Title) {
  }  
  callAPI(){  
    this.convert();
    // Tells me beforeCoinResults if it is set
    if(this.beforeCoinResults[1]){
      this.beforeFilled = true;
    } // Tells me afterCoinResults if it is set
    if(this.afterCoinResults[1]){
      this.afterFilled = true;
    } // if after coins afterFilled
      for(let i = 0; i < this.coinResults.length; i ++){
        if(this.beforeFilled && this.afterFilled){
          if(this.beforeCoinResults[i].amount < this.afterCoinResults[i].amount){
            this.coinResults[i].decrease = false;
            this.coinResults[i].increase = true;
          } else if(this.beforeCoinResults[i].amount > this.afterCoinResults[i].amount) {
             this.coinResults[i].increase = false;
            this.coinResults[i].decrease = true;
          } // else if
        } // if
      } // for
  }  // call API
    ngOnInit(){
      
// call api every second
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
            type: "cryptoCurrency",
            increase: false,
            decrease: false       
          }); // push 
        } // for
      
        //convert all the crypto to crypto
        for(var i = 0 ; i <= this.coins.length - 1; i++){
          var tempName = this.coins[i] as string;
          console.log(tempName);
          this.coinResults.push({
            name: this.convertName(tempName as string), 
            amount: Math.round(this.holdings * this.ticker[this.convertName(this.step2Selection)].last / this.ticker[tempName].last*100000000)/100000000,
            type: "cryptoCurrency",
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
              type: "regularCurrency",
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
                type: "regularCurrency",
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


      case 'Synereo (AMP)':
        return ('BTC_AMP');
      case 'BTC_AMP':
        return ('Synereo (AMP)');
      
      case 'Ardor (ARDR)':
        return ('BTC_ARDR');
      case 'BTC_ARDR':
        return ('Ardor (ARDR)');

      case 'Boolberry (BBR)':
        return ('BTC_BBR');
      case 'BTC_BBR':
        return ('Boolberry (BBR)');

      case 'Bytecoin (BCN)':
        return ('BTC_BCN');
      case 'BTC_BCN':
        return ('Bytecoin (BCN)');

      case 'BitCrystals (BCY)':
        return ('BTC_BCY');
      case 'BTC_BCY':
        return ('BitCrystals (BCY)');

      case 'Belacoin (BELA)':
        return ('BTC_BELA');
      case 'BTC_BELA':
        return ('Belacoin (BELA)');

      case 'Bitcoin (BTC)':
        return ('BTC_BTC');
      case 'BTC_BTC':
        return ('Bitcoin (BTC)');

      case 'Bitstart (BITS)':
        return ('BTC_BITS');
      case 'BTC_BITS':
        return ('Bitstart (BITS)');

      case 'BlackCoin (BLK)':
        return ('BTC_BLK');
      case 'BTC_BLK':
        return ('BlackCoin (BLK)');

      case 'BitcoinDark (BTCD)':
        return ('BTC_BTCD');
      case 'BTC_BTCD':
        return ('BitcoinDark (BTCD)');

      case 'Bitmark (BTM)':
        return ('BTC_BTM');
      case 'BTC_BTM':
        return ('Bitmark (BTM)');

      case 'BitShares (BTS)':
        return ('BTC_BTS');
      case 'BTC_BTS':
        return ('BitShares (BTS)');

      case 'Burst (BURST)':
        return ('BTC_BURST');
      case 'BTC_Burst (BURST':
        return ('Burst (BURST)');

      case 'Coin2.0 (C2)':
        return ('BTC_C2');
      case 'BTC_C2':
        return ('Coin2.0 (C2)');

        case 'CLAMS (CLAM)':
        return ('BTC_CLAM');
      case 'BTC_CLAM':
        return ('CLAMS (CLAM)');

        case 'Curecoin (CURE)':
        return ('BTC_CURE');
      case 'BTC_CURE':
        return ('Curecoin (CURE)');

      case 'DASH (DASH)':
        return ('BTC_DASH');
      case 'BTC_DASH':
        return ('DASH (DASH)');

      case 'Decred (DCR)':
        return ('BTC_DCR');
      case 'BTC_DCR':
        return ('Decred (DCR)');

      case 'DigiByte (DGB)':
        return ('BTC_DGB');
      case 'BTC_DGB':
        return ('DigiByte (DGB)');

      case 'Dogecoin (DOGE)':
        return ('BTC_DOGE');
      case 'BTC_DOGE':
        return ('Dogecoin (DOGE)');

      case 'Einsteinium (EMC2)':
        return ('BTC_EMC2');
      case 'BTC_EMC2':
        return ('Einsteinium (EMC2)');

      case 'Ethereum Classic (ETC)':
        return ('BTC_ETC');
      case 'BTC_ETC':
        return ('Ethereum Classic (ETC)');

      case 'Ethereum (ETH)':
        return ('BTC_ETH');
      case 'BTC_ETH':
        return ('Ethereum (ETH)');

      case 'Expanse (EXP)':
        return ('BTC_EXP');
      case 'BTC_EXP':
        return ('Expanse (EXP)');

      case 'Factom (FCT)':
        return ('BTC_FCT');
      case 'BTC_FCT':
        return ('Factom (FCT)');

      case 'FoldingCoin (FLDC)':
        return ('BTC_FLDC');
      case 'BTC_FLDC':
        return ('FoldingCoin (FLDC)');

      case 'GameCredits (GAME)':
        return ('BTC_GAME');
      case 'BTC_GAME':
        return ('GameCredits (GAME)');

      case 'Golem (GNT)':
        return ('BTC_GNT');
      case 'BTC_GNT':
        return ('Golem (GNT)');

      case 'Gridcoin Research (GRC)':
        return ('BTC_GRC');
      case 'BTC_GRC':
        return ('Gridcoin Research (GRC)');

      case 'Huntercoin (HUC)':
        return ('BTC_HUC');
      case 'BTC_HUC':
        return ('Huntercoin (HUC)');

      case 'Horizon (HZ)':
        return ('BTC_HZ');
      case 'BTC_HZ':
        return ('Horizon (HZ)');

      case 'IO Digital Currency (IOC)':
        return ('BTC_IOC');
      case 'BTC_IOC':
        return ('IO Digital Currency (IOC)');

      case 'LBRY Credits (LBC)':
        return ('BTC_LBC');
      case 'BTC_DASH':
        return ('LBRY Credits (LBC)');

      case 'Lisk (LSK)':
        return ('BTC_LSK');
      case 'BTC_LSK':
        return ('Lisk (LSK)');
      
      case 'Litecoin (LTC)':
        return ('BTC_LTC');
      case 'BTC_LTC':
        return ('Litecoin (LTC)');

      case 'MaidSafeCoin (MAID)':
        return ('BTC_MAID');
      case 'BTC_MAID':
        return ('MaidSafeCoin (MAID)');

      case 'MyriadCoin (MYR)':
        return ('BTC_MYR');
      case 'BTC_MYR':
        return ('MyriadCoin (MYR)');

      case 'Nautiluscoin (NAUT)':
        return ('BTC_NAUT');
      case 'BTC_NAUT':
        return ('Nautiluscoin (NAUT)');

      case 'NAVCoin (NAV)':
        return ('BTC_NAV');
      case 'BTC_NAV':
        return ('NAVCoin (NAV)');

      case 'Neoscoin (NEOS)':
        return ('BTC_NEOS');
      case 'BTC_NEOS':
        return ('Neoscoin (NEOS)');

      case 'Namecoin (NMC)':
        return ('BTC_NMC');
      case 'BTC_NMC':
        return ('Namecoin (NMC)');

      case 'NobleCoin (NOBL)':
        return ('BTC_NOBL');
      case 'BTC_NOBL':
        return ('NobleCoin (NOBL)');

      case 'DNotes (NOTE)':
        return ('BTC_NOTE');
      case 'BTC_NOTE':
        return ('DNotes (NOTE)');

      case 'NuShares (NSR)':
        return ('BTC_NSR');
      case 'BTC_NSR':
        return ('NuShares (NSR)');

      case 'Nexium (NXC)':
        return ('BTC_NXC');
      case 'BTC_NXC':
        return ('Nexium (NXC)');

      case 'NST (NXT)':
        return ('BTC_NXT');
      case 'BTC_NXT':
        return ('NST (NXT)');

      case 'Omni (OMNI)':
        return ('BTC_OMNI');
      case 'BTC_OMNI':
        return ('Omni (OMNI)');

      case 'PascalCoin (PASC)':
        return ('PascalCoin (PASC)');
      case 'BTC_PASC':
        return ('PascalCoin (PASC)');

      case 'Pinkcoin (PASC)':
        return ('BTC_PASC');
      case 'BTC_PASC':
        return ('Pinkcoin (PASC)');

      case 'PotCoin (POT)':
        return ('BTC_POT');
      case 'BTC_POT':
        return ('PotCoin (POT)');

      case 'Peercoin (PPC)':
        return ('BTC_PPC');
      case 'BTC_PPC':
        return ('Peercoin (PPC)');

      case 'Qibuck (QBK)':
        return ('BTC_QBK');
      case 'BTC_QBK':
        return ('Qibuck (QBK)');

      case 'Qora (QORA)':
        return ('BTC_QORA');
      case 'BTC_QORA':
        return ('Qora (QORA)');
      
      case 'Quatloo (QTL)':
        return ('BTC_QTL');
      case 'BTC_QTL':
        return ('Quatloo (QTL)');
      
      case 'Radium (RADS)':
        return ('BTC_RADS');
      case 'BTC_RADS':
        return ('Radium (RADS)');

      case 'Rubycoin (RBY)':
        return ('BTC_RBY');
      case 'BTC_RBY':
        return ('Rubycoin (RBY)');

      case 'Augur (REP)':
        return ('BTC_REP');
      case 'BTC_REP':
        return ('Augur (REP)');

      case 'Riecoin (RIC)':
        return ('BTC_RIC');
      case 'BTC_RIC':
        return ('Riecoin (RIC)');

      case 'Steem Dollars (SBD)':
        return ('BTC_SBD');
      case 'BTC_SBD':
        return ('Steem Dollars (SBD)');

      case 'Siacoin (SC)':
        return ('BTC_SC');
      case 'BTC_SC':
        return ('Siacoin (SC)');

      case 'Shadow (SDC)':
        return ('BTC_SCD');
      case 'BTC_SCD':
        return ('Shadow (SDC)');

      case 'Storjcoin X (SJCX)':
        return ('BTC_SJCX');
      case 'BTC_SJCX':
        return ('Storjcoin X (SJCX)');

      case 'STEEM (STEEM)':
        return ('BTC_STEEM');
      case 'BTC_STEEM':
        return ('STEEM (STEEM)');

      case 'Stellar (STR)':
        return ('BTC_STR');
      case 'BTC_STR':
        return ('Stellar (STR)');

      case 'Stratis (STRAT)':
        return ('BTC_STRAT');
      case 'BTC_START':
        return ('Stratis (STRAT)');
      
      case 'Syscoin (SYS)':
        return ('BTC_SYS');
      case 'BTC_SYS':
        return ('Syscoin (SYS)');

      case 'SuperNET (UNITY)':
        return ('BTC_UNITY');
      case 'BTC_UNITY':
        return ('SuperNET (UNITY)');

      case 'Viacoin (VIA)':
        return ('BTC_VIA');
      case 'BTC_VIA':
        return ('Viacoin (VIA)');

      case 'Voxels (VOX)':
        return ('BTC_VOX');
      case 'BTC_VOX':
        return ('Voxels (VOX)');

      case 'VeriCoin (VRC)':
        return ('BTC_VRC');
      case 'BTC_VRC':
        return ('VeriCoin (VRC)');

      case 'Vertcoin (VTC)':
        return ('BTC_VTC');
      case 'BTC_VTC':
        return ('Vertcoin (VTC)');

      case 'BitcoinPlus (XBC)':
        return ('BTC_XBC');
      case 'BTC_XBC':
        return ('BitcoinPlus (XBC)');

      case 'Counterparty (XCP)':
        return ('BTC_XCP');
      case 'BTC_XCP':
        return ('Counterparty (XCP)');

      case 'NEM (XEM)':
        return ('BTC_XEM');
      case 'BTC_XEM':
        return ('NEM (XEM)');

      case 'Maqi (XMG)':
        return ('BTC_XMG');
      case 'BTC_XMG':
        return ('Maqi (XMG)');

      case 'Monero (XMR)':
        return ('BTC_XMR');
      case 'BTC_XMR':
        return ('Monero (XMR)');



      case 'Primecoin (XPM)':
        return ('BTC_XPM');
      case 'BTC_XPM':
        return ('Primecoin (XPM)');

      case 'Ripple (XRP)':
        return ('BTC_XRP');
      case 'BTC_XRP':
        return ('Ripple (XRP)');

      case 'Vcash (XVC)':
        return ('BTC_XVC');
      case 'BTC_XVC':
        return ('Vcash (XVC)');

      case 'Zcash (ZEC)':
        return ('BTC_ZEC');
      case 'BTC_ZEC':
        return ('Zcash (ZEC)');

      // Currencies
      case 'American (USDT)':
        return ('USDT');
      case "USDT":
        return('American (USDT)');

      case 'Canadian (CAD)':  
        return ('CAD');
      case 'CAD':
        return ('Canadian (CAD)')
     
      case 'Austrailian (AUD)':  
        return ('AUD');
      case 'AUD':
        return ('Austrailian (AUD)')

      case 'Buglarian (BGN)':  
        return ('BGN');
      case 'BGN':
        return ('Buglarian (BGN)')

      case 'Brazilian (BRL)':  
        return ('BRL');
      case 'BRL':
        return ('Brazilian (BRL)')

      case 'Swiss Franc (CHF)':  
        return ('CHF');
      case 'CHF':
        return ('Swiss Franc (CHF)')

      case 'Chinese (CNY)':  
        return ('CNY');
      case 'CNY':
        return ('Chinese (CNY)')
      
      case 'Czech (CZK)':  
        return ('CZK');
      case 'CZK':
        return ('Czech (CZK)')

      case 'Danish (DKK)':  
        return ('DKK');
      case 'DKK':
        return ('Danish (DKK)')

      case 'British Pound (GBP)':  
        return ('GBP');
      case 'GBP':
        return ('British Pound (GBP)')
      
      case 'Hong Kong (HKD)':  
        return ('HKD');
      case 'HKD':
        return ('Hong Kong (HKD)')

      case 'Croatian (HRK)':  
        return ('HRK');
      case 'HRK':
        return ('Croatian (HRK)')
      
      case 'Hungarian (HUF)':  
        return ('HUF');
      case 'HUF':
        return ('Hungarian (HUF)')

      case 'Indonesian (IDR)':  
        return ('IDR');
      case 'IDR':
        return ('Indonesian (IDR)')

      case 'Israeli (ILS)':  
        return ('ILS');
      case 'ILS':
        return ('Israeli (ILS)')

      case 'Indian (INR)':  
        return ('INR');
      case 'INR':
        return ('Indian (INR)')

      case 'Japanese (JPY)':  
        return ('JPY');
      case 'JPY':
        return ('Japanese (JPY)')

      case 'South Korean (KRW)':  
        return ('KRW');
      case 'KRW':
        return ('South Korean (KRW)')

      case 'Mexican (MXN)':  
        return ('MXN');
      case 'MXN':
        return ('Mexican (MXN)')

      case 'Malaysian (MYR)':  
        return ('MYR');
      case 'MYR':
        return ('Malaysian (MYR)')
      
      case 'Norwegian (NOK)':  
        return ('NOK');
      case 'NOK':
        return ('Malaysian (NOK)')

      case 'Polish (PLN)':  
        return ('PLN');
      case 'PLN':
        return ('Polish (PLN)')

      case 'New Zealand (NZD)':  
        return ('NZD');
      case 'NZD':
        return ('New Zealand (NZD)')

      case 'Philippine (PHP)':  
        return ('PHP');
      case 'PHP':
        return ('Philippine (PHP)')

      case 'Romanian (RON)':  
        return ('RON');
      case 'RON':
        return ('Romanian (RON)')

      case 'Russian (RUB)':  
        return ('RUB');
      case 'RUB':
        return ('Russian (RUB)')

      case 'Swedish (SEK)':  
        return ('SEK');
      case 'SEK':
        return ('Swedish (SEK)')

      case 'Singapore (SGD)':  
        return ('SGD');
      case 'SGD':
        return ('Singapore (SGD)')

      case 'Thai (THB)':  
        return ('THB');
      case 'THB':
        return ('Thai (THB)')

      case 'Turkish (TRY)':  
        return ('TRY');
      case 'TRY':
        return ('Turkish (TRY)')

      case 'South African (ZAR)':  
        return ('ZAR');
      case 'ZAR':
        return ('South African (ZAR)')

      case 'Euro (EUR)':
        return ('EUR');
      case 'EUR':
        return('Euro (EUR)')
    }//END SWITCH
  }//END CONVERTNAM



// Logic Block for setting title
  pinnedCoinAmount: number; // is Used by the DOM to see what item is pinned.
  pinnedCoinName: string;
  updateTitle: any; // used to give the interval an ID

// gets the value for the browser title and ensure it updates as the API chanhes.
  pinTitle(amount: number, name: string) {
    clearInterval(this.updateTitle);
    this.updateTitle = setInterval(()=>{
      for(let i = 0; i<= this.coinResults.length; i++){
        if(name === this.coinResults[i].name){
          this.pinnedCoinAmount = this.coinResults[i].amount;
          this.pinnedCoinName = this.coinResults[i].name;
          this.setTitle(this.pinnedCoinName + " - " + this.pinnedCoinAmount.toString());
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



