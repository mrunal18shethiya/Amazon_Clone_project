import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  list:any;

  constructor(public Http:HttpClient, public app:AppComponent){
    let url=app.baseUrl+"admin/getAll";

    Http.get(url).subscribe((data:any)=>{
      if (data==null) {
        window.alert("Something is Wrong")
      }else{
        this.list=data;
      }
    })
  }

  name:string="";

  addCat(){
    let url=this.app.baseUrl+"admin/addCat"+this.app.id;
    this.Http.post(url,this.name).subscribe((data)=>{
      if (data==null) {
        window.alert("somethiong went wrong")
      } else {
        this.list.push(data);
        this.name='';
      }
    })
  }
  deleteCat(i:number){

  }

}
