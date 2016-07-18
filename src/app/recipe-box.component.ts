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
    name: "Lasagna Alfredo",
    ingredients: ['Meat'],
    steps: ['1.who cares'],
    time: ['20 min.', '2 hrs']
  }

  constructor(private _recipeService: RecipeService) {
    
  }

  ngOnInit(): void {
    
    // console.log(this._recipeService.getRecipes())
  }
}
