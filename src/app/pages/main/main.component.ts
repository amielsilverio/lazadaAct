
import { Component } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
  
})
export class MainComponent {
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
