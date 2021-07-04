import {State} from 'src/app/shared/state/state';
import {Ingredient} from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';

export interface PizzaState extends State {
  id: number;
  name: string;
  ingredients: Ingredient[];
  price: number;
}

export const initialPizzaState: PizzaState = {
  id: 0,
  name: 'Jalapener',
  ingredients: [],
  price: 5,
  loaded: false,
  loading: false,
};
