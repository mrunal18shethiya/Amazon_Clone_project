import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


 register() {
    this.app.whatTOShow=4;
}

  constructor(public http:HttpClient,public app:AppComponent){}
  
  username:string='';
  password:string='';

  login(){
    let url=this.app.baseUrl+"login/log"
    let obj=[this.username,this.password];

    console.log(obj);
    this.http.post(url,obj).subscribe((response:any)=>{
      // console.log(response);
      if (response==null) {
        window.alert('Something is wrong');
      }else{
        if (response.id<1) {
          window.alert(response.errorMessage);
        }else{
        this.app.id=response.id;
        this.app.whatTOShow=response.accountType;
      }
      }

    })
    
  }
}
