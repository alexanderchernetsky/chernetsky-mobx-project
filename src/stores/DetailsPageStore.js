import {observable, action} from "mobx";

const api_key='ec83b25765d95deefa90ae1330f76748';

class DetailsPageStore{
  @observable recipeId = null;
  @observable recipe = null;

  @action setRecipeId = (id) => {
    this.recipeId = id;
  };

  @action getRecipeDetails = () => {
    const data = JSON.parse(localStorage.getItem(`/details/${this.recipeId}`));
    data ? this.recipe = data :
    fetch(`https://www.food2fork.com/api/get?key=${api_key}&rId=${this.recipeId}`)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(`Error: ${res.error}`);
          } else {
            this.recipe = res.recipe;
            console.log(this.recipe);
            localStorage.setItem(`/details/${this.recipeId}`, JSON.stringify(this.recipe));
          }
        })
  }
}

export default DetailsPageStore;