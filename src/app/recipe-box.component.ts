import { Component, OnInit } from '@angular/core';

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
 
  myRecipe = {
    name: "me",
    ingredients: ['hh'],
    steps: ['3'],
    time: ['2', '2']
  }

  constructor(private _recipeService: RecipeService) {
    
  }

  ngOnInit(): void {
    
    // console.log(this._recipeService.getRecipes())
  }
}
