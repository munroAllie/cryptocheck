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

  constructor(private conversionService: ConversionService){}

  getCurrentTime() {
    this.conversionService.getCurrentTime()
    .subscribe(
     data => this.time = JSON.stringify(data), 
     error => alert(error)
      ) 
  };

}

