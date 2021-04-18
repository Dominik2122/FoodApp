import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FoodService } from 'src/app/food/food.service';

@Component({
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.css']
})
export class ControlerComponent {
  @Input() ingredientName:string
  @Input() active = false
  @Input() ingredientPrice:number
  @Output() ingredientChanged = new EventEmitter<string>();
  @Output() showModal = new EventEmitter<boolean>();

  constructor(private foodService:FoodService) { }


  ingredientOnClick(name){
    if (this.ingredientName == 'cheese' && this.active == true){
      this.showModal.emit()
    } else{ 
      this.ingredientChanged.emit(name)
      this.active = !this.active
      this.foodService.priceUpdate(this.ingredientPrice)
    }
  }

  onModalClick(name) {
    this.ingredientChanged.emit(name)
    this.active = !this.active
  }

}
