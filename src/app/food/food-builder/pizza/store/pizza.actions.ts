import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';

const PREFIX = '[FOOD]';

export const FOOD_ACTIONS = {
  LOAD_PIZZA: `${PREFIX}LOAD_PIZZA`,
  LOAD_AVAILABLE_PIZZA_INGREDIENTS: `${PREFIX}LOAD_AVAILABLE_PIZZA_INGREDIENTS`,
  LOAD_AVAILABLE_PIZZA_INGREDIENTS_SUCCESS: `${PREFIX}LOAD_AVAILABLE_PIZZA_INGREDIENTS_SUCCESS`,
  UPDATE_PIZZA_INGREDIENTS: `${PREFIX}UPDATE_PIZZA_INGREDIENTS`,
  UPDATE_PIZZA_PRICE: `${PREFIX}UPDATE_PIZZA_PRICE`
};

export class LoadAvailablePizzaIngredients implements Action {
  type = FOOD_ACTIONS.LOAD_AVAILABLE_PIZZA_INGREDIENTS;

  constructor(public payload?: any) {
  }
}

export class UpdatePizzaIngredients implements Action {
  type = FOOD_ACTIONS.UPDATE_PIZZA_INGREDIENTS;

  constructor(public payload: Ingredient[]) {
  }
}

export class UpdatePizzaPrice implements Action {
  type = FOOD_ACTIONS.UPDATE_PIZZA_PRICE;

  constructor(public payload: number) {
  }
}


export type PizzasAction = LoadAvailablePizzaIngredients |
  UpdatePizzaIngredients |
  UpdatePizzaPrice;
