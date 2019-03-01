import {observable, action} from 'mobx';

class FavoritesPageStore {
  @observable likedRecipes = [];

  @action makeFavorite = (recipe) => {
    this.likedRecipes.push(recipe);
    localStorage.setItem(`/recipeApp/likedRecipes`, JSON.stringify(this.likedRecipes));
  };

  @action removeFromFavorite = (recipe) => {
    const recipeIndex = this.likedRecipes.findIndex(elem => elem.recipe_id === recipe.recipe_id);
    this.likedRecipes.splice(recipeIndex, 1);
    localStorage.setItem(`/recipeApp/likedRecipes`, JSON.stringify(this.likedRecipes));
  };

  @action getLikedRecipesFromLocalStorage = () => {
    this.likedRecipes = JSON.parse(localStorage.getItem(`/recipeApp/likedRecipes`));
  }
}

export default FavoritesPageStore;