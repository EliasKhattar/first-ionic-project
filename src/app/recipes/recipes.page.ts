import {Component, inject, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes-service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: false,
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] | undefined;
  private recipesService = inject(RecipesService);

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
