import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FoodService } from '../../food.service';
import { Pizza } from './pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  ingredients: Pizza
  price:number

  constructor(
    private foodService:FoodService
  ) { }

  ngOnInit() {
    this.ingredients = this.foodService.getIngredients('pizza')
    this.foodService.ingredientsUpdated.subscribe((data:Pizza) => {
      this.ingredients = data
    })
    this.foodService.price.subscribe((price) => {
      this.price =  price
      console.log(price)
    })
  }


}
