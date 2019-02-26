import {observable, action} from 'mobx';

class FavoritesPageStore{
  @observable likedRecipes = [];


  @action makeFavorite = (recipe) => {
    this.likedRecipes.push(recipe);
    setTimeout(()=>console.log(this.likedRecipes), 100);
    localStorage.setItem(`/recipeApp/likedRecipes`, JSON.stringify(this.likedRecipes));
  };

  @action removeFromFavorite = (recipe) => {
    const recipeIndex = this.likedRecipes.findIndex(elem => elem.recipe_id === recipe.recipe_id);
    console.log(recipeIndex);
    this.likedRecipes.splice(recipeIndex, 1);
    setTimeout(()=>console.log(this.likedRecipes), 100);
    localStorage.setItem(`/recipeApp/likedRecipes`, JSON.stringify(this.likedRecipes));
  };

  @action getLikedRecipesFromLocalStorage = () => {
    this.likedRecipes = localStorage.getItem(`/recipeApp/likedRecipes`);
  }

}

export default FavoritesPageStore;