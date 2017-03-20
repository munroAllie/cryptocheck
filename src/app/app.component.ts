import { Component } from '@angular/core';
import {ConversionService} from './Conversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConversionService]
})
export class AppComponent {
  time : String;
  private step2AOptions : any[];
  private step2BOptions : any[];
  private step2Selection: string;
  private conversionService: ConversionService;
  private holdings: number;
  private CAD: number = 1;
  private bitcoin: number = 1283.00;

  constructor(){

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

  } // constructor
  getCurrentTime() {
    this.conversionService.getCurrentTime()
    .subscribe(
     data => this.time = JSON.stringify(data), 
     error => alert(error)
      )  // subscribe
  };  // get current time
  NgOnChanges(){
    console.log("I am changing!!");
    if (this.step2Selection === this.step2AOptions[1]){
      this.CAD = this.holdings * this.bitcoin;
    } // bitcoin if
  } //ng chnages
} //export class

