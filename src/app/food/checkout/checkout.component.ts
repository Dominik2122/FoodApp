import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  meal: string;

  constructor(private foodService: FoodService) {
  }

  prevUrl: string;
  ingredients: string[] = [];
  links = {
    tomatoes: 'assets/tomatoe.png',
    cheese: 'assets/cheese.png',
    peppers: 'assets/peppers.png',
    beans: 'assets/beans.png',
    corn: 'assets/corn.png',
    onions: 'assets/onion.png'

  };
  price: number;

  ngOnInit() {
  }


}
