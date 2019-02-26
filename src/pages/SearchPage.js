import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import SearchBar from '../components/SearchBar';
import NoResults from '../components/NoResults';
import Recipes from '../components/Recipes';


@inject('searchPageStore')
@inject('favoritesPageStore')
@observer
class SearchPage extends Component{
  render() {
    return (
        <div className="container">
          <SearchBar searchPageStore={this.props.searchPageStore}/>
          {this.props.searchPageStore.recipes.length &&
          <Recipes recipes={this.props.searchPageStore.recipes}
                   switchLike={this.props.searchPageStore.switchLike}
                   makeFavorite={this.props.favoritesPageStore.makeFavorite}
                   removeFromFavorite={this.props.favoritesPageStore.removeFromFavorite}
          /> ||
          <NoResults title='No results found.' description='Perform a new search using the search bar.'/>}
        </div>
    )
  }
}
export default SearchPage;