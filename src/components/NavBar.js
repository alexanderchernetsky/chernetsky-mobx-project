import React from 'react';
import  {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

const NavBar = observer(() => (
    <nav>
      <ul className="nav nav-tabs">
        <a className="navbar-brand" href="#">RecipeApp</a>
        <li className="nav-item">
          <Link className="nav-link" to='/search'>Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/favorites'>Favorites</Link>
        </li>
      </ul>
    </nav>
));

export default NavBar;