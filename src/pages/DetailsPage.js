import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';

@inject('detailsPageStore')
@observer
class DetailsPage extends Component{

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    this.props.detailsPageStore.setRecipeId(recipeId);
    this.props.detailsPageStore.getRecipeDetails();
  }

  render() {
    const {detailsPageStore} = this.props;
    return (
        <div className="container mt-2">
          {
            detailsPageStore.recipe &&
            <div className="jumbotron mb-0 text-center">
              <img src={detailsPageStore.recipe.image_url} alt="dish" className="w-75 rounded mx-auto d-block"/>
              <h1>{detailsPageStore.recipe.title}</h1>
              <p className="lead ">Publisher: {detailsPageStore.recipe.publisher}</p>
              <hr className="my-4"/>
              <ul className="list-group">
                {detailsPageStore.recipe.ingredients.map((ingredient,index) => (
                    <li className="list-group-item " key={index}>{ingredient}</li>
                ))}
              </ul>
              <button className="btn btn-primary btn-lg mt-3">
                <Link to='/' className="text-light text-decoration-none">Return Back</Link>
              </button>
            </div>
          }
        </div>
    )
  }
}
export default DetailsPage;