import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  constructor(public app:AppComponent){}
  WhatToShow:number=0;

  changeCat(){
    this.WhatToShow=1;
  }
  logout(){
    this.app.whatTOShow=0;
  }


}
