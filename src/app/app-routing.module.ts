import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './auth/account/account.component';
import { OrdersComponent } from './auth/account/orders/orders.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: AuthComponent},
  {path:'orders', component: OrdersComponent},
  {path:'account', component: AccountComponent},
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then(mod => mod.FoodModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
