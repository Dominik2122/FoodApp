import { createFeatureSelector, createSelector } from '@ngrx/store';
import {PizzaState} from '../state/pizza.state';


const getPizzaFeatureState = createFeatureSelector<PizzaState>('pizza');

export const getPizzaName = createSelector(
  getPizzaFeatureState,
  state => {
    return state.name;
  }
);

export const getPizzaPrice = createSelector(
  getPizzaFeatureState,
  state => state.price
);

export const getPizzaId = createSelector(
  getPizzaFeatureState,
  state => state.id
);

export const getPizzaIngredients = createSelector(
  getPizzaFeatureState,
  state => state.ingredients
);
