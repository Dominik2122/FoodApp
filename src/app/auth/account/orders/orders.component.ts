import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, map, pluck, take, tap } from 'rxjs/operators';
import { Order } from 'src/app/food/order/order';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = []
  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.authService.getUserOrderList().subscribe(user => {
      this.orders = user.orders
    })
  }
    

}
