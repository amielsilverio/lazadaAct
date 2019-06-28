import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/http-client.service';
import { CartComponent } from './pages/cart/cart.component';
import { MainComponent } from './pages/main/main.component';
import { PaymentComponent } from './pages/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,

    ProductComponent,

    CartComponent,

    MainComponent,

    PaymentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
