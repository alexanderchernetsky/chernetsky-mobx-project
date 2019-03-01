import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import {findObjectWithTheSameProperty} from '../helpers';
import PropTypes from 'prop-types';

const Recipes = observer(({recipes, removeFromFavorite, makeFavorite, likedRecipes}) => (
    <div className="d-flex flex-row flex-wrap justify-content-center">
        {recipes.map(recipe => (
            <div className="card my-3 mx-1 text-center"  key={recipe.recipe_id}>
                <img src={recipe.image_url} className="card-img-top" alt="dish"/>
                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <Link to={{ pathname: `/details/${recipe.recipe_id}`}}>
                        More...
                    </Link>
                    <div onClick={findObjectWithTheSameProperty(likedRecipes, recipe.recipe_id) ?
                        ()=>{removeFromFavorite(recipe)} :
                        ()=>{makeFavorite(recipe)}}
                    >
                        {findObjectWithTheSameProperty(likedRecipes, recipe.recipe_id) ?
                            <span><i className="fa fa-heart fa-3x text-danger"></i></span> :
                            <div><i className="far fa-heart fa-3x"></i></div> }
                        {/*use span and div as wrappers to make icons switching work*/}
                    </div>
                </div>
            </div>
        ))}
    </div>
));

Recipes.propTypes = {
    recipes: PropTypes.array,
    removeFromFavorite: PropTypes.func,
    makeFavorite: PropTypes.func,
    likedRecipes: PropTypes.array,
};

export default Recipes;