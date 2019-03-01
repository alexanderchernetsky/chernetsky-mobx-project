import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Recipes from "../components/Recipes";
import NoResults from '../components/NoResults';
import PropTypes from 'prop-types';

@inject('searchPageStore')
@inject('favoritesPageStore')
@observer
class FavoritesPage extends Component {
  static propTypes = {
    favoritesPageStore: PropTypes.shape({
      getLikedRecipesFromLocalStorage: PropTypes.func,
      likedRecipes: PropTypes.array,
      makeFavorite: PropTypes.func,
      removeFromFavorite: PropTypes.func,
    })
  };

  componentDidMount() {
    this.props.favoritesPageStore.getLikedRecipesFromLocalStorage();
  }

  render() {
    const {likedRecipes, makeFavorite, removeFromFavorite} = this.props.favoritesPageStore;
    return (
        <div className="container page__container">
          {likedRecipes.length &&
          <Recipes recipes={likedRecipes}
                   likedRecipes={likedRecipes}
                   makeFavorite={makeFavorite}
                   removeFromFavorite={removeFromFavorite}
          /> ||
          <NoResults title='No favorite recipes found.'
                     description='Push the heart button to add recipe to favorites.'
          />}
        </div>
    )
  }
}

export default FavoritesPage;