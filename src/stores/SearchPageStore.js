import {observable, action} from "mobx";

const api_key='ec83b25765d95deefa90ae1330f76748';

class SearchPageStore {
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
    if(data) {
      this.recipes = data;
      this.isLoading = false;
    } else {
      fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${this.search}&page=${this.currentPage}`)
          .then(res=>res.json())
          .then(res=> {
            this.recipes = res.recipes;
            localStorage.setItem(`/search/${this.search}/${this.currentPage}`, JSON.stringify(this.recipes));
            this.isLoading = false;
          })
          .catch(error => alert(`Error: ${error.error}`))
    }
  };
}

export default SearchPageStore;