import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Ingredient} from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';
import {PizzaState} from 'src/app/food/store/pizza.state';
import {LoadAvailablePizzaIngredients} from 'src/app/food/store/pizza.actions';
import { getIngredients } from 'src/app/food/store/pizza.reducer';

@Injectable({
  providedIn: 'root'
})
export class PizzaCommandDispatcher {

  constructor(private store: Store<PizzaState>) {
  }

  getPizzaIngredients(): Observable<Ingredient[]> {
    return this.store.select(getIngredients);
  }

  getAllAvailablePizzaIngredients(): void {
    return this.store.dispatch(new LoadAvailablePizzaIngredients());
  }
}
