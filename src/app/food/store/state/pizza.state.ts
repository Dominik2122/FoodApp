import {State} from '../../../shared/state/state';
import {Ingredient} from '../../food-builder/pizza/ingredients/ingredient.model';

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
