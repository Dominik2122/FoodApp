import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { FOOD_ACTIONS, LoadAvailablePizzaIngredientsSuccess } from 'src/app/food/store/pizza.actions';
import { ingredientsArray } from 'src/app/food/store/pizzaIngredients.mock';
import { Ingredient } from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class FoodEffects {
  constructor(
    private actions$: Actions
  ) {
  }

  @Effect()
  loadIngredients$ = () => this.actions$.pipe(
    ofType(FOOD_ACTIONS.LOAD_AVAILABLE_PIZZA_INGREDIENTS),
    mergeMap(() => {
      return of(new LoadAvailablePizzaIngredientsSuccess(ingredientsArray)).pipe<Ingredient[]>(
        map(action => {
          return action.payload;
        })
      );
    })
  );

}
