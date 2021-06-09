import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  ingredients;
  names = ['tomatoes', 'onions', 'cheese', 'peppers', 'beans', 'corn'];
  newNames = {};
  checkoutStatus = false;
  modalStatus = false;

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
  }

  changeIngredients(name: string) {
  }


  changeModal() {
    this.modalStatus = !this.modalStatus;
  }

  removeCheese() {
  }

  showCheckout() {

  }


}


