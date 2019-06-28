import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  openModal : boolean = false;
  purchases = []
  totalPrice=0

  constructor() { }

  ngOnInit() {
    //from local storage
    this.purchases = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []
    this.purchases.map(item=>{
      this.totalPrice += (item.price*item.quantity)
    })

    // for (var i = 0; i < this.purchases[i].length(); i++) {
    //   this.totalPrice += this.purchases[i].price;
    // }
    console.log(this.purchases);

  }

  popOutModal(){
    this.openModal = true
  }

  closeModal(){
    this.openModal = false
  }

}
