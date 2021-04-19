import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';
import { Pizza } from '../pizza/pizza';
import { keys } from 'ts-transformer-keys';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  ingredients: Pizza
  names = ['tomatoes', 'onions', 'cheese', 'peppers', 'beans', 'corn']
  newNames = {}
  checkoutStatus = false
  modalStatus = false
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.ingredients = this.foodService.getIngredients('pizza');
    this.foodService.ingredientsUpdated.subscribe((data:Pizza) => {
      this.ingredients = data
      for (let name of this.names) {
        if (this.ingredients[name].amount == 0) {
          this.newNames[name] = {active:false,price:this.ingredients[name].price}
        } else {
          this.newNames[name] = {active:true,price:this.ingredients[name].price}
        }
      }
      
    })
    for (let name of this.names) {
      if (this.ingredients[name].amount == 0) {
        this.newNames[name] = {active:false,price:this.ingredients[name].price}
      } else {
        this.newNames[name] = {active:true,price:this.ingredients[name].price}
      }
    }
  }

  changeIngredients(name:string) {
    const newIngredients = {...this.ingredients}
    if (this.ingredients[name].amount == 0) {
      newIngredients[name].amount = 1
    } else {
      newIngredients[name].amount = 0
    }
    this.foodService.updateIngredients('pizza', newIngredients)
  }


  changeModal(){
    this.modalStatus = !this.modalStatus
  }

  removeCheese(){
    this.ingredients['cheese'].amount = 0
    this.foodService.ingredientsUpdated.next(this.ingredients)
    this.foodService.priceUpdate(-this.ingredients['cheese'].price)
    this.changeModal();
  }

  showCheckout(){
    this.checkoutStatus = !this.checkoutStatus;
  }

  
}


