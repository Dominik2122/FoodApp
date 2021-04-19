import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodBuilderComponent } from './food-builder/food-builder.component';

const routes: Routes = [
  {path:'checkout', component:CheckoutComponent},
  {path:':foodName', component:FoodBuilderComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
