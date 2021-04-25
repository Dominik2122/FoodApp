import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
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
    this.http.get("https://foodapp-8fffc-default-rtdb.europe-west1.firebasedatabase.app/users-orders.json").pipe(
      filter((res:any) => res.userId == this.authService.user.subscribe().unsubscribe() )
    ).subscribe((orders:Order[]) => {
      console.log(orders)
      this.orders = [...orders]
    }) 
  }

}
