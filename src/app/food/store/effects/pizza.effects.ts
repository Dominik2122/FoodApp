import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, from, of} from 'rxjs';
import {map, mergeMap, catchError, switchMap, tap} from 'rxjs/operators';
import {FOOD_ACTIONS, LoadAvailablePizzaIngredientsSuccess} from '../actions/pizza.actions';
import {ingredientsArray} from '../mocks/pizzaIngredients.mock';
import {Ingredient} from '../../food-builder/pizza/ingredients/ingredient.model';

@Injectable()
export class FoodEffects {
  constructor(
    private actions$: Actions,
  ) {
  }

  @Effect()
  loadIngredients$ = () => this.actions$.pipe(
    ofType(FOOD_ACTIONS.LOAD_AVAILABLE_PIZZA_INGREDIENTS),
    switchMap(() => ingredientsArray),
    tap(x => console.log(x))
  );

}
