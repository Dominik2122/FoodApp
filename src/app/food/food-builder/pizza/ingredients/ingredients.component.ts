import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../pizza';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input() ingredients: Pizza;

  constructor() {
  }

  ngOnInit(): void {
  }

}
