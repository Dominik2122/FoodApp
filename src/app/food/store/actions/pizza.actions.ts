import { Action } from '@ngrx/store';
import {Ingredient} from '../../food-builder/pizza/ingredients/ingredient.model';

const PREFIX = '[FOOD]';

export const FOOD_ACTIONS = {
  LOAD_PIZZA: `${PREFIX}LOAD_PIZZA`,
  LOAD_AVAILABLE_PIZZA_INGREDIENTS: `${PREFIX}LOAD_AVAILABLE_PIZZA_INGREDIENTS`,
  LOAD_AVAILABLE_PIZZA_INGREDIENTS_SUCCESS: `${PREFIX}LOAD_AVAILABLE_PIZZA_INGREDIENTS_SUCCESS`
};

export class LoadPizza implements Action {
  type = FOOD_ACTIONS.LOAD_PIZZA;

  constructor(public payload?: any) {
  }
}

export class LoadAvailablePizzaIngredients implements Action {
  type = FOOD_ACTIONS.LOAD_AVAILABLE_PIZZA_INGREDIENTS;

  constructor() {
  }
}

export class LoadAvailablePizzaIngredientsSuccess implements Action {
  type = FOOD_ACTIONS.LOAD_AVAILABLE_PIZZA_INGREDIENTS_SUCCESS;

  constructor(payload: Ingredient[]) {
  }
}


export type PizzasAction = LoadPizza |
  LoadAvailablePizzaIngredients;
