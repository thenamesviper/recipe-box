import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'recipe-preview-app',
    // template: "hi",
    templateUrl: './app/recipe-preview/recipe-preview.component.html',
    styleUrls: ['./app/recipe-preview/recipe-preview.component.css']
})


export class RecipePreviewComponent implements OnInit {
    @Input() recipe;
    
    name: string;
    ingredients: string[];
    steps: string[];
    time: string[];
    
    ngOnInit() {
        this.name = this.recipe.name;
        this.ingredients = this.recipe.ingredients;
        this.steps = this.recipe.steps;
        this.time = this.recipe.time;
    }

    sayHi() {
        console.log("hello, there")
    }
}
