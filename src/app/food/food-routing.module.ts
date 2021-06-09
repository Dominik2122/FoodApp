import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodBuilderComponent } from './food-builder/food-builder.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order', component: OrderComponent },
  { path: ':foodName', component: FoodBuilderComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule {
}
