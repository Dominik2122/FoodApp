import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';
import { Ingredient } from './ingredients/ingredient.model';
import { PizzaCommandDispatcher } from 'src/app/food/food-builder/pizza/store/pizza.commandDispatchers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  ingredients: Ingredient[];
  currentIngredients: Ingredient[];
  price: Observable<number>;

  constructor(
    private foodService: FoodService,
    private pizzaCommandDispatchers: PizzaCommandDispatcher
  ) {
  }

  ngOnInit(): void {
    this.initPizzaIngredients();
    this.subscribeForPizzaIngredients();
    this.subscribeForPrice();
  };


  private initPizzaIngredients(): void {
    console.log('initPizza');
    this.pizzaCommandDispatchers.getAllAvailablePizzaIngredients();
    this.pizzaCommandDispatchers.getPizzaIngredients().subscribe(ingredients => {
      this.ingredients = ingredients;
    })
  }


  subscribeForPizzaIngredients(): void {
    this.pizzaCommandDispatchers.getPizzaIngredients()
        .subscribe((ingredients: Ingredient[]) => {
          this.currentIngredients = ingredients;
        });
  }

  subscribeForPrice(): void {
    this.price = this.pizzaCommandDispatchers.getPizzaPrice();
  }
};
