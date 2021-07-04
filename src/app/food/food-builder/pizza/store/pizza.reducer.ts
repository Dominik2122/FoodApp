import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { FOOD_ACTIONS } from 'src/app/food/store/pizza.actions';
import { initialPizzaState, PizzaState } from 'src/app/food/store/pizza.state';

export const pizzaReducer = (state: PizzaState = initialPizzaState, action: Action) => {
  switch (action.type) {
    case FOOD_ACTIONS.LOAD_PIZZA:
      return {
        food: null,
        price: 100,
        ordered: true
      };
    case FOOD_ACTIONS.LOAD_AVAILABLE_PIZZA_INGREDIENTS_SUCCESS:
      console.log(state);
      return {
        ...state
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
