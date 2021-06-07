import { Pizza } from 'src/app/food/food-builder/pizza/pizza';
import { Action, createFeatureSelector } from '@ngrx/store';
import { FOOD_ACTIONS } from 'src/app/food/store/actions/pizza.actions';


export interface State {
  food: FoodState;
}

export interface FoodState {
  food: Pizza;
  price: number;
  ordered: boolean;
}

const initalState: FoodState = {
  food: null,
  price: null,
  ordered: null
};

export const pizzaReducer = (state: FoodState, action: Action) => {
  switch (action.type) {
    case FOOD_ACTIONS.LOAD_PIZZA:
      return {
        food: null,
        price: 100,
        ordered: true
      };
  }

  return initalState;
};
