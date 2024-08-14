import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  WhatToShow:number=0;

  constructor(public app:AppComponent){}
  changeCat(n:number){
    this.WhatToShow=n;
  }
  logout(){
    this.app.whatTOShow=0;
  }
}
