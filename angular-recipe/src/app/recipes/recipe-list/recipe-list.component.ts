import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() childRecipeSelected = new EventEmitter<Recipe>();
  recipes: Array<Recipe> = [new Recipe('Test Recipe', 'simple a test',
    'https://imagesvc.timeincapp.com/v3/mm/image?' +
    'url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%' +
    '2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%' +
    '3Fitok%3DN9u99OOY&w=700&q=85'),
    new Recipe('Another Recipe', 'another test',
      'https://imagesvc.timeincapp.com/v3/mm/image?' +
      'url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%' +
      '2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%' +
      '3Fitok%3DN9u99OOY&w=700&q=85')
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    // console.log('childRecipeSelected emitted');
    // console.log(recipe);
    this.childRecipeSelected.emit(recipe);
  }

}
