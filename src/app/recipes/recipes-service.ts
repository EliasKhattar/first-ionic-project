import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://share.google/images/r0reVuZ0AKaRjyAwm',
      ingredients: ['Pork Meat', 'French Fries', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://share.google/images/sa3ReIQXaXCQqX0vs',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ]

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string | null): Recipe {
    return <Recipe>this.recipes.find(recipe => recipe.id === recipeId)
  }

  deleteRecipe(recipeId: string | undefined) {
    this.recipes = this.recipes.filter( recipe => {
      return recipe.id !== recipeId
    })
  }
}
