import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cartprodcut',
  templateUrl: './cartprodcut.component.html',
  styleUrls: ['./cartprodcut.component.css']
})
export class CartprodcutComponent {

  list:any;//cartproduct

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"buyer/getcart/"+app.id;

    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        this.list=data;
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].quant=1;
          this.list[i].amount=this.quant*this.list[i].price*((100-this.list[i].discount)/100);
          this.total=this.total+this.list[i].amount;
        }
        console.log(this.list)
      }
    })
  }
  quant:number=1;
  total:number=0;

  cartassign(l:number,val:any){
    let num: number = Number(val);
    console.log(l);
    for (let i = 0; i < this.list.length; i++) {
      // const element = array[i];
      if (i==l) {
        if (num<=this.list[i].quantity) {
          this.list[i].quant=num;
          this.list[i].amount=this.list[i].quant*this.list[i].price*((100-this.list[i].discount)/100);
          console.log(this.list[i]);
      }else{
          window.alert("quantity is  more than available")
          this.list[i].quant=this.list[i].quantity;
        }
      }
    }
    this.total=0;
    for (let i = 0; i < this.list.length; i++) {
      this.total=this.total+this.list[i].amount;
    }
  }

  buyPod(){
    let url=this.app.baseUrl+"buyer/placeOrder/"+this.app.id;
    
    let array2D: number[][] = [];
  for (let i = 0; i < this.list.length; i++) {
    let item = this.list[i];
    let catrid = this.list[i].id; // Assuming 'id' is the property name
    let quantity = this.list[i].quant; // Assuming 'quantity' is the property name
    array2D.push([catrid, quantity]);
  }
  // console.log(array2D)
  this.Http.post(url,array2D).subscribe((data:any)=>{
    if (data==null) {
      window.alert("something went wrong")
    } else {
      if (data==1) {
        window.alert("product purchased");
        this.list=[];
      } else {
        window.alert("could not place order")
      }
    }
  })

  }
  
}
