import { Action } from '@ngrx/store';
import { FOOD_ACTIONS } from 'src/app/food/store/actions/pizza.actions';
import {initialPizzaState, PizzaState} from '../state/pizza.state';

export const pizzaReducer = (state: PizzaState = initialPizzaState, action: Action) => {
  switch (action.type) {
    case FOOD_ACTIONS.LOAD_PIZZA:
      return {
        food: null,
        price: 100,
        ordered: true
      };
  }

  return state;
};
