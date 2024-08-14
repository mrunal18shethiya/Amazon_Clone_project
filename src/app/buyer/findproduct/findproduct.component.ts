import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-findproduct',
  templateUrl: './findproduct.component.html',
  styleUrls: ['./findproduct.component.css']
})
export class FindproductComponent {
  list:any;//show category
  list2:any;//show products
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
  }
  minprice:number=0;
  maxprice:number=0;
  minrating:number=0;
  categoryid:number=0;
  // arr=[this.categoryid,this.minprice,this.maxprice,this.minrating];
  getProd(){
    
      let arr=[this.categoryid,this.minprice,this.maxprice,this.minrating]
      console.log(arr)
      let url=this.app.baseUrl+"buyer/getProductByFilter";

      this.Http.post(url,arr).subscribe((data:any)=>{
        if (data==null) {
          window.alert("Something is Wrong")
        }else{
          this.list2=data;
          console.log(this.list2);
        }
      });
      
  }

  addCart(id:number){
    
    let url=this.app.baseUrl+"buyer/addToCart/"+id+"/"+this.app.id;
    this.Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        if (data==1) {
          window.alert("product added to the cart")
        } else {
          window.alert("product alredy added to the cart")
        }
        
        
      }
    });
  }
}
