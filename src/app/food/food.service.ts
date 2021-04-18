import { EventEmitter, Injectable} from '@angular/core';
import {withLatestFrom} from 'rxjs/operators'
import { Pizza } from './food-builder/pizza/pizza';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  ingredientsUpdated = new EventEmitter<{}>()
  ingredients = {
    'pizza': {
      tomatoes: {amount:0, price:1.70},
      beans: {amount:0, price:1.20},
      corn: {amount:0, price:1.00},
      cheese: {amount:1, price:2.00},
      peppers: {amount:0, price:1.95},
      onions: {amount:0, price:0.99},
    },
  }
  price = new EventEmitter<number>();
  constructor() { }

  getIngredients(food:string){
    this.price.next(5)
    return this.ingredients[food]
  }

  updateIngredients(food:string, ingredients:Pizza){
    this.ingredients[food] = ingredients 
    this.ingredientsUpdated.next(this.ingredients[food])
  }

  priceUpdate(price:number){
    this.price
      .pipe(
        withLatestFrom(x => console.log(x))
      )
  }




}


