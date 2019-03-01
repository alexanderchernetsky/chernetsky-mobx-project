import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';

@inject('detailsPageStore')
@observer
class DetailsPage extends Component{
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    detailsPageStore: PropTypes.shape({
      getRecipeDetails: PropTypes.func,
      deleteRecipeFromStore: PropTypes.func,
      isLoading: PropTypes.bool,
      recipe: PropTypes.object,
    })
  };

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    this.props.detailsPageStore.getRecipeDetails(recipeId);
  }

  componentWillUnmount() {
    this.props.detailsPageStore.deleteRecipeFromStore();
  }

  render() {
    const {detailsPageStore} = this.props;
    return (
        <div className="container mt-2">
          {detailsPageStore.isLoading &&
            <div className="mt-4 text-center"><i className="fas fa-circle-notch fa-spin fa-3x"></i></div>}
          {detailsPageStore.recipe &&
            <div className="jumbotron mb-2 py-2 text-center">
              <h1 className="text-muted details__header">{detailsPageStore.recipe.title}</h1>
              <p className="lead ">Publisher: {detailsPageStore.recipe.publisher}</p>
              <img src={detailsPageStore.recipe.image_url} alt="dish" className="rounded mx-auto d-block details__image"/>
              <hr className="my-4"/>
              <ul className="list-group">
                {detailsPageStore.recipe.ingredients.map((ingredient,index) => (
                    <li className="list-group-item " key={index}>{ingredient}</li>
                ))}
              </ul>
              <button className="btn btn-primary mt-3" onClick={this.props.history.goBack}>
                Return Back
              </button>
            </div>}
        </div>
    )
  }
}

export default DetailsPage;