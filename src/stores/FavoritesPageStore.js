import {observable, action} from 'mobx';

class FavoritesPageStore {
  @observable likedRecipes = [];

  @action makeFavorite = (recipe) => {
    this.likedRecipes.push(recipe);
    setTimeout(()=>console.log(this.likedRecipes), 100);
    localStorage.setItem(`/recipeApp/likedRecipes`, JSON.stringify(this.likedRecipes));
  };

  @action removeFromFavorite = (recipe) => {
    console.log(this.likedRecipes);
    const recipeIndex = this.likedRecipes.findIndex(elem => elem.recipe_id === recipe.recipe_id);
    console.log(recipeIndex);
    this.likedRecipes.splice(recipeIndex, 1);
    setTimeout(()=>console.log(this.likedRecipes), 100);
    localStorage.setItem(`/recipeApp/likedRecipes`, JSON.stringify(this.likedRecipes));
  };

  @action getLikedRecipesFromLocalStorage = () => {
    this.likedRecipes = JSON.parse(localStorage.getItem(`/recipeApp/likedRecipes`));
    console.log(this.likedRecipes);
  }

}

export default FavoritesPageStore;