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
  ngOnInit() {
    this.items.push({ id: 1, name: "Espoir Analog Blue Dial Men's Watch - ESP12457", price: "10000", quantity: 2 })
    this.items.push({ id: 2, name: "Espoir Analog Blue Dial Men's Watch - ESP12457", price: "10000", quantity: 2 })
    this.items.push({ id: 3, name: "Espoir Analog Blue Dial Men's Watch - ESP12457", price: "10000", quantity: 2 })
    this.items.push({ id: 4, name: "Espoir Analog Blue Dial Men's Watch - ESP12457", price: "10000", quantity: 2 })
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
