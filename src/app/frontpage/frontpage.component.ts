import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {
history() {
this.app.whatTOShow=7
}
return() {
this.app.whatTOShow=6
}
cart() {
this.app.whatTOShow=5
}
seller() {
this.app.whatTOShow=2
}
  constructor(public http:HttpClient,public app:AppComponent){}
  SignIn() {
this.app.whatTOShow=10
}

}
