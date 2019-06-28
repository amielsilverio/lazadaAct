import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  stateSubject = new Subject<any>()
  $stateSubject = this.stateSubject.asObservable()
  constructor() { }

  getCartCount(data){
   var ctr = 0
   data.map(item=>{
    ctr++;
   })
   return ctr++;
  }
}
