import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
username: any;
  constructor(public http:HttpClient,public app:AppComponent){}
name: any;
password: any;
accountType: any;
list: any;

 
registers() 
{
  let url=this.app.baseUrl+"login/reg"
    let obj={name :this.name,
      username:this.username,
      password:this.password,
      accountType:this.accountType};

    console.log(obj);
    this.http.post(url,obj).subscribe((response:any)=>{
      // console.log(response);
      if (response==null) {
        window.alert('Something is wrong');
      }
      if (response==1) {
          window.alert('Enter Username');
        }
        if (response==2) {
          window.alert('Enter Password');
        }
        if (response==3) {
          window.alert('username already existing please try with another one');
        }
        if (response==4) {
          window.alert('Register successfully');
        }
      

    })
}

}

