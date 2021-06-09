import {Component, OnInit} from '@angular/core';
import {FoodService} from '../../food.service';
import {Store} from '@ngrx/store';
import {PizzaState} from '../../store/state/pizza.state';
import {Ingredient} from './ingredients/ingredient.model';
import {getPizzaIngredients} from '../../store/command-dispatchers/pizza.commandDispatchers';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  ingredients: Ingredient[];
  price = this.foodService.currentPrice;

  constructor(
    private foodService: FoodService,
  ) {
  }

  ngOnInit(): void {
    this.subscribeForPizzaIngredients();
    this.ingredients = this.foodService.getIngredients('pizza');

  };


  subscribeForPizzaIngredients(): void {
    getPizzaIngredients()
      .subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
};
