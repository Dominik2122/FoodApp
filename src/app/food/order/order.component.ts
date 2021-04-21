import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { FoodService } from '../food.service';





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
  error: string;
  isLoading = true
  success: boolean;
  timer = 7

  constructor(
    private foodService: FoodService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  sendOrder() {
    this.isLoading = true
    const { name, address, email, phone } = this.deliveryForm.value
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
    this.foodService.sendOrderToServer(order)
      .pipe(catchError((err) => {
        this.error = err.message
        return of([])
      }))
      .subscribe((res) => {
        this.success = true     
    })
    setInterval(()=>{
      this.timer
    }, 1000)
    setTimeout(() =>{
      this.success = false
      this.router.navigate(['/'])
    }, 7000) 
  }
}
