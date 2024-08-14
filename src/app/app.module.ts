import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './seller/product/product.component';
import { FindproductComponent } from './buyer/findproduct/findproduct.component';
import { CartprodcutComponent } from './buyer/cartprodcut/cartprodcut.component';
import { HistoryComponent } from './buyer/history/history.component';
import { ReturnComponent } from './buyer/return/return.component';
import { RegisterComponent } from './register/register.component';
import { FrontpageComponent } from './frontpage/frontpage.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SellerComponent,
    BuyerComponent,
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    FindproductComponent,
    CartprodcutComponent,
    HistoryComponent,
    ReturnComponent,
    RegisterComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
