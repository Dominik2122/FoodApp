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
  price = this.foodService.currentPrice

  constructor(
    private foodService:FoodService
  ) { }

  ngOnInit() {
    if (this.foodService.currentPrice == 0){
      this.foodService.currentPrice = 5
      this.price = 5
    }   
    this.ingredients = this.foodService.getIngredients('pizza')
    this.foodService.ingredientsUpdated.subscribe((data:Pizza) => {
      this.ingredients = data
    })
    this.foodService.price.subscribe((price) => {
      this.price = price
    })
    
  }

  ngOnDestroy() {
    this.foodService.currentPrice = this.price
  }


}
