import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  meal:string;
  constructor(private foodService: FoodService) { }
  prevUrl:string;
  ingredients:string[] = []
  links = {
    tomatoes: 'assets/tomatoe.png',
    cheese:'assets/cheese.png',
    peppers:'assets/peppers.png',
    beans:'assets/beans.png',
    corn:'assets/corn.png',
    onions:'assets/onion.png'
    
  }
  price:number
  objectKeys = Object.keys;
  ngOnInit() {
    this.prevUrl = this.foodService.prevFoodName
    this.price = this.foodService.currentPrice
    const ingredients = Object.keys(this.foodService.getIngredients(this.prevUrl))
    for (let ingredient of ingredients){
      
      if (this.foodService.getIngredients(this.prevUrl)[ingredient].amount != 0) {
        this.ingredients.push(ingredient)
      }
    }
  }


}
