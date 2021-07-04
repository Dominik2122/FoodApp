import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';
import { Ingredient } from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';
import { PizzaCommandDispatcher } from 'src/app/food/food-builder/pizza/store/pizza.commandDispatchers';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input()
  availableIngredients: Ingredient[];

  constructor(private pizzaCommands: PizzaCommandDispatcher) {
  }

  ngOnInit(): void {
  }

  changeIngredientStatus(index: number): void {
    const updatedIngredients: Ingredient[] = [];
    for (const ingriedient of this.availableIngredients) {
      const newIngredient = { ...ingriedient };
      updatedIngredients.push(newIngredient)
    }
    updatedIngredients[index].active = !updatedIngredients[index].active;
    this.pizzaCommands.updatePizzaIngredients(updatedIngredients);
  }


}


