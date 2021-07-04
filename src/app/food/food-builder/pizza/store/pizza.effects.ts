import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import {
  FOOD_ACTIONS,
  PizzasAction, UpdatePizzaIngredients,
  UpdatePizzaPrice
} from 'src/app/food/food-builder/pizza/store/pizza.actions';
import { Ingredient } from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';
import { PizzaResource } from 'src/app/food/food-builder/pizza/pizza.resource';

@Injectable()
export class FoodEffects {
  constructor(
    private actions$: Actions,
    private pizzaResource: PizzaResource
  ) {
  }

  @Effect()
  loadIngredients$ = () => this.actions$.pipe(
    ofType(FOOD_ACTIONS.LOAD_AVAILABLE_PIZZA_INGREDIENTS),
    switchMap(() => this.pizzaResource.getAvailablePizzaIngredients()),
    map(response => {
      return new UpdatePizzaIngredients(response);
    })
  );

  @Effect()
  updatePrice$ = () => this.actions$.pipe(
    ofType(FOOD_ACTIONS.UPDATE_PIZZA_INGREDIENTS),
    map((action: PizzasAction) => action.payload),
    map((updatedIngredients: Ingredient[]) => {
      const newPrice = updatedIngredients.reduce((previousValue: number, currentValue: Ingredient) => {
        if (currentValue.active) {
          previousValue += currentValue.price;
        }
        return previousValue;
      }, 5);
      return newPrice;
    }),
    map((updatedPrice) => new UpdatePizzaPrice(updatedPrice))
  );


}
