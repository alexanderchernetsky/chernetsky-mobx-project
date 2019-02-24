import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';

const Recipes = observer(({recipes}) => (
    <div className="d-flex flex-row flex-wrap">
      {recipes.map(recipe => (
          <div className="card my-3 mx-1 text-center"  key={recipe.recipe_id}>
            <img src={recipe.image_url} className="card-img-top" alt="dish"/>
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <button className="btn btn-primary mx-auto">
                <Link className="text-light text-decoration-none" to={{ pathname: `/details/${recipe.recipe_id}`}}>
                  More...
                </Link>
              </button>
            </div>
          </div>
      ))}
    </div>
));

export default Recipes;