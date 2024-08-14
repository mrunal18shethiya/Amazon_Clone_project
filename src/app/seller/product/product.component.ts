import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  list:any; // category list
  list2:any; //product List

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"admin/getAll";

    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        this.list=data;
        console.log(this.list);
      }
    });

    let url2=app.baseUrl+'seller/getAllProd/'+app.id;

    Http.get(url2).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        this.list2=data;
      }
    });
  }

  name:string='';
  price:number=0;
  quantity:number=0;
  description:string='';
  discount:number=0;
  categoryid:number=0;
  addProd(){
    let product={
      "name":this.name,
      "userid":this.app.id,
      "price":this.price,
      "quantity":this.quantity,
      "description":this.description,
      "discount":this.discount,
      "categoryid":this.categoryid
    }

    let url3=this.app.baseUrl+'seller/AddProd';
    this.Http.post(url3,product).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        this.list2.push(data);
        this.name='';
        this.price=0;
        this.quantity=0;
        this.description='';
        this.discount=0;
        this.categoryid=0;
      }
    })

  }

}
