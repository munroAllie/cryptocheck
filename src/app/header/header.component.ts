import { Component, OnInit } from '@angular/core';
import { WindowScrollService } from '../window-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navIsFixed: boolean;

  constructor( private windowscrollservice  : WindowScrollService) { 
  
  }
interval: any;
   ngOnInit(){
   this.interval = setInterval(() => {
        this.windowscrollservice.onWindowScroll() ;
        this.navIsFixed = this.windowscrollservice.navIsFixed;
    }, 10);
   }
}
