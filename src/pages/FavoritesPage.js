import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Recipes from "../components/Recipes";
import NoResults from '../components/NoResults';


@inject('searchPageStore')
@inject('favoritesPageStore')
@observer
class FavoritesPage extends Component {

  componentDidMount() {
    this.props.favoritesPageStore.getLikedRecipesFromLocalStorage();
  }

  render() {
    return (
        <div>
          {this.props.favoritesPageStore.likedRecipes.length &&
          <Recipes recipes={this.props.favoritesPageStore.likedRecipes}
                   switchLike={this.props.searchPageStore.switchLike}
                   makeFavorite={this.props.favoritesPageStore.makeFavorite}
                   removeFromFavorite={this.props.favoritesPageStore.removeFromFavorite}
          /> ||
          <NoResults title='No favorite recipes found.' description='Push the heart button to add recipe to favorites.'/>}
        </div>
    )
  }
}


export default FavoritesPage;