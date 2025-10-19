import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipesService} from "../recipes-service";
import {Recipe} from "../recipe.model";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: false,
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe | undefined;

  private activatedRoute = inject(ActivatedRoute);
  private recipesService = inject(RecipesService);
  private route = inject(Router);
  private alertCtrl = inject(AlertController);

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('recipeId')) {
          return;
        }
        const recipeId = paramMap.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      }
    );
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
        {
          text: 'Delete',
          handler: () => {
            this.deleteAndNavigate();
          }
        }]
    })
      .then(alertEl => {
        alertEl.present();
      })
    ;
  }

  deleteAndNavigate() {
    this.recipesService.deleteRecipe(this.loadedRecipe?.id);
    this.route.navigate(['/recipes'])
  }
}
