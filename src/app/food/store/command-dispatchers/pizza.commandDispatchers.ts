import {Observable} from 'rxjs';
import {Ingredient} from '../../food-builder/pizza/ingredients/ingredient.model';

export function getPizzaIngredients(): Observable<Ingredient[]> {
  return  this.store.select(getPizzaIngredients);
}
