import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Ingredient} from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';
import {PizzaState} from 'src/app/food/food-builder/pizza/store/pizza.state';
import { LoadAvailablePizzaIngredients, UpdatePizzaIngredients } from 'src/app/food/food-builder/pizza/store/pizza.actions';
import { getIngredients, getPrice } from 'src/app/food/food-builder/pizza/store/pizza.reducer';

@Injectable({
  providedIn: 'root'
})
export class PizzaCommandDispatcher {

  constructor(private store: Store<PizzaState>) {
  }

  getPizzaIngredients(): Observable<Ingredient[]> {
    return this.store.select(getIngredients);
  }

  getPizzaPrice(): Observable<number> {
    return this.store.select(getPrice);
  }

  getAllAvailablePizzaIngredients(): void {
    return this.store.dispatch(new LoadAvailablePizzaIngredients());
  }

  updatePizzaIngredients(ingredients: Ingredient[]): void {
    return this.store.dispatch(new UpdatePizzaIngredients(ingredients))
  }



}
