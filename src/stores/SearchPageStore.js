import {observable, action, computed} from "mobx";

const api_key='ec83b25765d95deefa90ae1330f76748';

class SearchPageStore{
  @observable search = '';
  @observable currentPage = 1;
  @observable isLoading = false;
  @observable recipes = [];

  @action setSearchQuery(query) {
    this.search = query;
  }

  @action loadImages = () => {
    this.isLoading = true;
    const data = JSON.parse(localStorage.getItem(`/search/${this.search}/${this.currentPage}`));
    data ? this.recipes = data :
    fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${this.search}&page=${this.currentPage}`)
        .then(res=>res.json())
        .then(res=> {
          this.isLoading = false;
          if (res.error) {
            alert(`Error: ${res.error}`)
          } else {
            this.recipes = res.recipes.map(obj => ({...obj, isFavorite: false}));
          }
          console.log(this.recipes);
          localStorage.setItem(`/search/${this.search}/${this.currentPage}`, JSON.stringify(this.recipes));
        });
  };

  @action switchLike = (recipeId) => {
    const targetRecipe = this.recipes.find(recipe => recipe.recipe_id === recipeId);
    targetRecipe.isFavorite ? targetRecipe.isFavorite = false : targetRecipe.isFavorite = true
  }

}



export default SearchPageStore;