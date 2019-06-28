import { Component } from '@angular/core';
import { HttpClientService } from './services/http-client.service';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazada';
  products : any
  cart = 0
  storageCart = []
  constructor(private httpClientService: HttpClientService,
    private stateService: StateService) { 
    if( localStorage.getItem("cart") != null ){
      this.storageCart =  JSON.parse(localStorage.getItem("cart"));
    }
    
  }

  ngOnInit() {
    this.httpClientService.get("../assets/testdata/data.json").subscribe(data => {
      console.log(data)
      this.products = data
    })

    this.stateService.stateSubject.subscribe(data=>{
      console.log("State Service " + data)
    })

   this.cart = this.stateService.getCartCount(this.storageCart)
   console.log(this.stateService.getCartCount(this.storageCart) +" TESTING App")
  }

  addToCart(prod){

    if( localStorage.getItem("cart") != null ){
      this.storageCart =  JSON.parse(localStorage.getItem("cart"));
    }

    this.storageCart.push({
      price : prod.price,
      id: prod.id,
      name: prod.name,
      image: prod.image
    })
    localStorage.setItem("cart",JSON.stringify(this.storageCart));
    this.cart ++;
  }
}
