import {observable, action} from "mobx";

const api_key='ec83b25765d95deefa90ae1330f76748';

class DetailsPageStore{
  @observable recipeId = null;
  @observable recipe = null;

  @action setRecipeId = (id) => {
    this.recipeId = id;
  };

  @action getRecipeDetails = () => {
    fetch(`https://www.food2fork.com/api/get?key=${api_key}&rId=${this.recipeId}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.recipe = res.recipe;
        })
  }
}

export default DetailsPageStore;