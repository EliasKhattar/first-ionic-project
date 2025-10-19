import {Component, Input} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Recipe} from "../recipe.model";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss'],
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe | undefined

  constructor() { }
}
