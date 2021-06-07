import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FoodService } from '../../food.service';
import { Pizza } from './pizza';
import { Store } from '@ngrx/store';
import { FoodState } from 'src/app/food/store/reducers/pizza.reducer';
import { LoadPizza } from 'src/app/food/store/actions/pizza.actions';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  ingredients: Pizza;
  price = this.foodService.currentPrice;

  constructor(
    private foodService: FoodService,
    private store: Store<FoodState>
  ) {
  }

  ngOnInit() {
    console.log('hi')
    this.store.dispatch(new LoadPizza());


    if (this.foodService.currentPrice === 0) {
      this.foodService.currentPrice = 5;
      this.price = 5;
    }
    this.ingredients = this.foodService.getIngredients('pizza');
    this.foodService.ingredientsUpdated.subscribe((data: Pizza) => {
      this.ingredients = data;
    });
    this.foodService.price.subscribe((price) => {
      this.price = price;
    });

  }

  ngOnDestroy() {
    this.foodService.currentPrice = this.price;
  }


}
