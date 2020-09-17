import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from '../../models';
import { RecipeService } from '../../services';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipeModel[] = [];

  constructor(private recipeService: RecipeService,
    private router: Router, 
    private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
