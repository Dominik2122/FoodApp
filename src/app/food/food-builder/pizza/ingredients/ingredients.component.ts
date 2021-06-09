import {Component, Input, OnInit} from '@angular/core';
import { Ingredient } from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input() ingredients: Ingredient[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
