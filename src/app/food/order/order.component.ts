import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../food-builder/pizza/pizza';
import { FoodService } from '../food.service';
import { Order } from './order';





@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  deliveryForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9)
    ])
  })

  modalStatus = false


 constructor(private foodService:FoodService) { }

  ngOnInit(): void {
  }


  sendOrder():any {
    const {name, address, email, phone } = this.deliveryForm.value
    const pizza = this.foodService.getIngredients('pizza')
    const value = this.foodService.currentPrice
    const order = {
      user: {
        username: name,
        address: address,
        email: email,
        phone: phone
      },
      food: pizza,
      value: value
    }
    this.foodService.sendOrderToServer(order).subscribe(res => console.log(res))
}
}
