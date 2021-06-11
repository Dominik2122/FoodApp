import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {getStateIngredients} from 'src/app/food/store/selectors/pizza.selectors';
import {Observable} from 'rxjs';
import {Ingredient} from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';
import {PizzaState} from 'src/app/food/store/state/pizza.state';
import {LoadAvailablePizzaIngredients} from '../actions/pizza.actions';

@Injectable({
  providedIn: 'root'
})
export class PizzaCommandDispatcher {

  constructor(private store: Store<PizzaState>) {
  }

  getPizzaIngredients(): Observable<Ingredient[]> {
    return this.store.select(getStateIngredients);
  }

  getAllAvailablePizzaIngredients(): void {
    return this.store.dispatch(new LoadAvailablePizzaIngredients());
  }
}
