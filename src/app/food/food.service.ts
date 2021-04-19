import { EventEmitter, Injectable} from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { Pizza } from './food-builder/pizza/pizza';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  ingredientsUpdated = new EventEmitter<{}>()
  ingredients = {
    'pizza': {
      tomatoes: {amount:0, price:1.70},
      beans: {amount:0, price:1.20},
      corn: {amount:0, price:1.00},
      cheese: {amount:1, price:2.00},
      peppers: {amount:0, price:1.95},
      onions: {amount:0, price:0.99},
    },
  }
  previousUrl:string
  currentUrl:string
  prevFoodName:string
  constructor(private router: Router,
    private route:ActivatedRoute) { }
  price = new EventEmitter<number>();
  currentPrice=0


  ngOnInit(): void {

  }


 
  
  getUrl(){
    this.previousUrl = this.router.url
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
      )
    .subscribe((event:NavigationEnd) => {
      this.currentUrl = event.url
    })
  }

  getIngredients(food:string){
    return this.ingredients[food]
  }

  updateIngredients(food:string, ingredients:Pizza){
    this.ingredients[food] = ingredients 
    this.ingredientsUpdated.next(this.ingredients[food])
  }

  priceUpdate(price:number){
    this.currentPrice += price
    this.price.emit(this.currentPrice)
  }




}


