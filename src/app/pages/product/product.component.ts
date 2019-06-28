import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product


  cart : any
  storageCart = []
  constructor(private stateService : StateService) { }

  ngOnInit() {
    this.stateService.stateSubject.subscribe(data=>{
      console.log("State Service " + data)
    })

  }

  addToCart(){

    if( localStorage.getItem("cart") != null ){
      this.storageCart =  JSON.parse(localStorage.getItem("cart"));
    }

    this.storageCart.push({
      price : this.product.price,
      id: this.product.id,
      name: this.product.name
    })
    localStorage.setItem("cart",JSON.stringify(this.storageCart));
    console.log(this.stateService.getCartCount(this.storageCart) +" TESTING ")
  }

}
