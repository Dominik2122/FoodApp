import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodBuilderComponent } from './food-builder/food-builder.component';
import { PizzaComponent } from './food-builder/pizza/pizza.component';
import { IngredientsComponent } from './food-builder/pizza/ingredients/ingredients.component';
import { ControlsComponent } from './food-builder/controls/controls.component';
import { ControlerComponent } from './food-builder/controls/controler/controler.component';
import { FoodDirective } from './food.directive';
import { SushiComponent } from './food-builder/sushi/sushi.component';
import { NotFoundComponent } from './food-builder/not-found/not-found.component';



@NgModule({
  declarations: [
    FoodBuilderComponent,
    PizzaComponent,
    IngredientsComponent,
    ControlsComponent,
    ControlerComponent,
    FoodDirective,
    SushiComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }