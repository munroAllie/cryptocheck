import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  donate: string = "Donate Bitcoin";
  donatebutton(){
    this.donate = "3GUVHU5ogh86ecZREBBFrv8bZSsqp13PsT";
  }
  constructor() { 
  }
}
