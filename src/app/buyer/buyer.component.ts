import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {

  constructor(public app:AppComponent){}
  WhatToShow:number=0;

  changeCat(a:number){
    this.WhatToShow=a;
  }
  logout(){
    this.app.whatTOShow=0;
  }
}
