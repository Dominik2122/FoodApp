import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';
import { Ingredient } from './ingredients/ingredient.model';
import { PizzaCommandDispatcher } from 'src/app/food/store/command-dispatchers/pizza.commandDispatchers';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  ingredients: Ingredient[];
  currentIngredients: Ingredient[];
  price: number;

  constructor(
    private foodService: FoodService,
    private pizzaCommandDispatchers: PizzaCommandDispatcher
  ) {
  }

  ngOnInit(): void {
    this.subscribeForPizzaIngredients();
    this.pizzaCommandDispatchers.getAllAvailablePizzaIngredients();
    console.log('after dispatching an action');
  };


  subscribeForPizzaIngredients(): void {
    this.pizzaCommandDispatchers.getPizzaIngredients()
        .subscribe((ingredients: Ingredient[]) => {
          this.currentIngredients = ingredients;
        });
  }
};
