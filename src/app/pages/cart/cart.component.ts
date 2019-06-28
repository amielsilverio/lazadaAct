import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = []
  constructor() { }
  index = 0
  lStorage = []
  ngOnInit() {
    this.lStorage = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []
    this.lStorage.map(item=>{
      this.items.push({id:item.id,name:item.name,price:item.price,quantity:1,image:item.image})
    })
   console.log(this.items)
  }
  subtract(id) {
    console.log(id)
    this.items.map(item => {
      if (item.id == id) {
        if ((item.quantity - 1) == 0) {
          this.deleteItem(id)
        } else {
          item.quantity -= 1
        }
      }

    })
  }
  deleteItem(id) {
    this.index = 0
    this.items.map(item => {
      if (item.id == id) {
        this.items.splice(this.index, 1)
      } else {
        this.index += 1
      }

    })}
  add(id) {
    this.items.map(item=>{
      if(item.id==id){
        item.quantity +=1
      }
    })
  }

}
