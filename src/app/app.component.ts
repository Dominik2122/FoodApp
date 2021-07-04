import { Component, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Ingredient } from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';
import { ingredientsArray } from 'src/app/food/food-builder/pizza/store/pizzaIngredients.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private userPostsCollection: AngularFirestoreCollection<Ingredient>;
  ingredients: Observable<Ingredient>;

  constructor(private angularFirestore: AngularFirestore) {
  }

}
