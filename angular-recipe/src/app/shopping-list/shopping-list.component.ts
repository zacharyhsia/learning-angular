import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../share/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [
    new Ingredient('mushroom', 6),
    new Ingredient('apple', 5)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(newIngredient: Ingredient) {
    console.log(newIngredient);
    this.ingredients.push(newIngredient);
  }

}
