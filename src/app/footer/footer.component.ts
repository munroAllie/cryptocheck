import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
donate: string = "Donate Bitcoin";
  constructor() { }
donatebutton(){
  this.donate = "3GUVHU5ogh86ecZREBBFrv8bZSsqp13PsT";
}
  ngOnInit() {
  }

}
