import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './account/orders/orders.component';
import { AddressComponent } from './account/address/address.component';
import { AppRoutingModule } from '../app-routing.module';
import { FoodModule } from '../food/food.module';




@NgModule({
  declarations: [
    AuthComponent,
    AccountComponent,
    OrdersComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
