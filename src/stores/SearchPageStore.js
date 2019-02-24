import {observable, action} from "mobx";


class SearchPageStore{
  @observable search = '';
  @observable currentPage = 1;
  @observable totalPages = 0;
  @observable isLoading = false;

  @action setSearchQuery(query) {
    this.search = query;
    console.log(query);
  }

  @action loadImages = () => {
    console.log('loading' + this.search);
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log('loaded');
    }, 2000);
  }


}

export default SearchPageStore;