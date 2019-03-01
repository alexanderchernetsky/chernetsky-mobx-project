import {observable, action} from "mobx";

const api_key='ec83b25765d95deefa90ae1330f76748';

class DetailsPageStore {
  @observable recipe = null;
  @observable isLoading = false;

  @action getRecipeDetails = (id) => {
    this.isLoading = true;
    const data = JSON.parse(localStorage.getItem(`/details/${id}`));
    if (data) {
      this.recipe = data;
      this.isLoading = false;
    } else {
      fetch(`https://www.food2fork.com/api/get?key=${api_key}&rId=${id}`)
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              alert(`Error: ${res.error}`);
            } else {
              this.recipe = res.recipe;
              localStorage.setItem(`/details/${id}`, JSON.stringify(this.recipe));
              this.isLoading = false;
            }
          })
    }
  };

  @action deleteRecipeFromStore = () => {
    this.recipe = null;
  }
}

export default DetailsPageStore;