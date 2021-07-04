import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Ingredient } from 'src/app/food/food-builder/pizza/ingredients/ingredient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaResource {
  private ingredientsColletion: AngularFirestoreCollection<Ingredient>;

  constructor(private angularFirestore: AngularFirestore) {
    this.ingredientsColletion = this.angularFirestore.collection<Ingredient>('Ingredients');
  }

  getAvailablePizzaIngredients(): Observable<Ingredient[]> {
    return this.ingredientsColletion.valueChanges();
  }
}
