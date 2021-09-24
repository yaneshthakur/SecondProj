import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipes ', 'A  test for recipe', 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Bunter_Teller_%2827_St%C3%BCcke%29.jpg'),
    new Recipe('Another  Recipe', '2nd test', 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Bunter_Teller_%2827_St%C3%BCcke%29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
