import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FOOD_ACTIONS, PizzasAction } from 'src/app/food/food-builder/pizza/store/pizza.actions';
import { PizzaState } from 'src/app/food/food-builder/pizza/store/pizza.state';

export const pizzaReducer = (state: PizzaState, action: PizzasAction) => {
  switch (action.type) {
    case FOOD_ACTIONS.LOAD_AVAILABLE_PIZZA_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        loaded: true
      };
    case FOOD_ACTIONS.UPDATE_PIZZA_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      };
    case FOOD_ACTIONS.UPDATE_PIZZA_PRICE:
      return {
        ...state,
        price: action.payload
      };
  }

  return state;
};


const getProductFeatureState = createFeatureSelector<PizzaState>('pizza');

export const getIngredients = createSelector(
  getProductFeatureState,
  state => {
    return state.ingredients;
  }
);

export const getPrice = createSelector(
  getProductFeatureState,
  state => {
    return state.price;
  }
);


export const isContentLoaded = createSelector(
  getProductFeatureState,
  state => {
    return state.loaded;
  }
);

