import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Order } from './order/order';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  rootUrl = 'https://foodapp-8fffc-default-rtdb.europe-west1.firebasedatabase.app/';
  ingredientsUpdated = new EventEmitter<{}>();
  pizza;
  previousUrl: string;
  currentUrl: string;
  prevFoodName: string;
  price = new EventEmitter<number>();w
  currentPrice = 0;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {
  }


  getUrl() {
  }

  getIngredients(food: string) {
  }

  updateIngredients(food: string, ingredients: any) {
  }

  priceUpdate(price: number) {
  }


  sendOrderToServer(data: Order) {
  }


  addOrderToUser(data: Order) {
  }


}


