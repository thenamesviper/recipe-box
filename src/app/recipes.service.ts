import { Injectable } from "@angular/core"
import { IRecipe } from "./recipe"

@Injectable()
export class RecipeService {
    recipes = JSON.parse(localStorage.getItem("thenamesviper_recipe-box_recipes"));
    getRecipes(): Array<IRecipe> {
        return this.recipes;
    }
}