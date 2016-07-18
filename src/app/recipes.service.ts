import { Injectable } from "@angular/core"
import { IRecipe } from "./recipe"

@Injectable()
export class RecipeService {
    getRecipes(): Array<IRecipe> {
        return localStorage.getItem("recipes");
    }
}