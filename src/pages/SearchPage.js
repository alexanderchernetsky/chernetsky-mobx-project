import React from 'react';
import {inject, observer} from 'mobx-react';
import SearchBar from '../components/SearchBar';
import NoResults from '../components/NoResults';
import Recipes from '../components/Recipes';
import PropTypes from 'prop-types';

const SearchPage = inject('searchPageStore')(inject('favoritesPageStore')(observer(({searchPageStore, favoritesPageStore}) => (
    <div className="container page__container">
      <SearchBar searchPageStore={searchPageStore}/>
      {searchPageStore.recipes.length &&
      <Recipes recipes={searchPageStore.recipes}
               likedRecipes={favoritesPageStore.likedRecipes}
               makeFavorite={favoritesPageStore.makeFavorite}
               removeFromFavorite={favoritesPageStore.removeFromFavorite}
      /> ||
      <NoResults title='No results found.' description='Perform a new search using the search bar.'/>}
    </div>
))));

SearchPage.propTypes = {
  searchPageStore: PropTypes.object,
  favoritesPageStore: PropTypes.shape({
    likedRecipes: PropTypes.array,
    makeFavorite: PropTypes.func,
    removeFromFavorite: PropTypes.func,
  })
};

export default SearchPage;