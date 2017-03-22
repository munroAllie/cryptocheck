import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

 step2AOptions : any[];
 step2BOptions : any[];
 step2Selection: string;
 public holdings: number;
 CAD: number = 1;
 bitcoin: number = 1283.00;

  constructor() { 
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

  }

  ngOnInit() {
  }

}
