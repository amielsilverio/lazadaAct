import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { MainComponent } from './pages/main/main.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [{path:'',component:MainComponent},{ path: 'cart', component: CartComponent },{ path: 'payment', component: PaymentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
