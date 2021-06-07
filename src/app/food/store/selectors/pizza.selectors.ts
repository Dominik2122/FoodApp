import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FoodState } from 'src/app/food/store/reducers/pizza.reducer';


const getPizzaFeatureState = createFeatureSelector<FoodState>('food');

export const getFood = createSelector(
  getPizzaFeatureState,
  state => {
    return state.food;
  }
);

export const getPrice = createSelector(
  getPizzaFeatureState,
  state => state.price
);
