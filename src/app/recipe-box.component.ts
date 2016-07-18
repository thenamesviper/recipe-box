import { Component, OnInit } from '@angular/core';

import { IRecipe } from "./recipe";
import { RecipeService } from "./recipes.service";
import { RecipePreviewComponent } from "./recipe-preview/recipe-preview.component"

@Component({
  moduleId: module.id,
  selector: 'recipe-box-app',
  templateUrl: 'recipe-box.component.html',
  styleUrls: ['recipe-box.component.css'],
  directives: [RecipePreviewComponent],
  providers: [RecipeService]
})
export class RecipeBoxAppComponent implements OnInit {
  title = 'Hello, World';
  recipes: IRecipe[];
  constructor(private _recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.recipes = this._recipeService.getRecipes();
    // console.log(this._recipeService.getRecipes())
  }
}
