import {observable, action} from "mobx";


class SearchPageStore{
  @observable search = '';
  @observable currentPage = 1;
  @observable totalPages = 0;
  @observable isLoading = 'false';

  @action  setSearchQuery(query) {
    this.search = query;
  }

  @action loadImages(query) {
    console.log('loading' + query);
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading=false;
      console.log('loaded');
    }, 2000);
  }


}

export default SearchPageStore;