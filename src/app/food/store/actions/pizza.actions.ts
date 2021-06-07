import { Action } from '@ngrx/store';

const PREFIX = '[FOOD]';

export const FOOD_ACTIONS = {
  LOAD_PIZZA: `${PREFIX}LOAD_PIZZA`
};

export class LoadPizza implements Action {
  type = FOOD_ACTIONS.LOAD_PIZZA;

  constructor(public payload?: any) {
  }
}

export type PizzasAction = LoadPizza;
