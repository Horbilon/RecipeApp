import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shoppingList.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Brennan\'s Irish Soda Bread',
      'Warm and soft Irish tradition passed down our family line, and directly into our bellies.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F808386.jpg',
      [
        new Ingredient('Milk', 6),
        new Ingredient('White Vinegar', 1),
        new Ingredient('Flour', 2),
        new Ingredient('Baking Soda', 2),
        new Ingredient('Salt', 1),
      ]),
    new Recipe(
      'Good Old Fashioned Pancakes',
      'This is a great recipe that I found in my Grandma\'s recipe book. Judging from the weathered look of this recipe card, this was a family favorite.',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F16%2F21014-Good-old-Fashioned-Pancakes-mfs_001-1.jpg',
      [
        new Ingredient('Flour', 2),
        new Ingredient('Baking Powder', 1),
        new Ingredient('Salt', 2),
        new Ingredient('Sugar', 2),
        new Ingredient('Eggs', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShopList (ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }



}
