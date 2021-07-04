import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodService } from 'src/app/food/food.service';

@Component({
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.css']
})
export class ControlerComponent {
  @Input() ingredientName: string;
  @Input() ingredientPrice: number;
  @Input() active: boolean;


  constructor() {
  }

}



