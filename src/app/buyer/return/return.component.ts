import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {
  returnForm: any;
  
  private app: AppComponent;

  constructor(private http: HttpClient, app: AppComponent) {
    this.app = app; 
  }

  onSubmit(returnForm: any) {
    let returnRequest = {
      myorderid: returnForm.value.myorderid,
      productid: returnForm.value.productid,
      reason: returnForm.value.reason,
      comments: returnForm.value.comments
    };

    let url = this.app.baseUrl + "buyer/return";

    this.http.post(url, returnRequest).subscribe(response => {
      console.log('Return request submitted', response);
    });
  }
}
