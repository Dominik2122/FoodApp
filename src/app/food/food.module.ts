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
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './order/success/success.component';
import { StoreModule } from '@ngrx/store';
import { pizzaReducer } from 'src/app/food/store/reducers/pizza.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    FoodBuilderComponent,
    PizzaComponent,
    IngredientsComponent,
    ControlsComponent,
    ControlerComponent,
    FoodDirective,
    SushiComponent,
    NotFoundComponent,
    CheckoutComponent,
    OrderComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('pizza', pizzaReducer),
    EffectsModule.forFeature([])
  ]
})
export class FoodModule {
}
