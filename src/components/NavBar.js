import React from 'react';
import  {Link} from 'react-router-dom';
import {observer} from 'mobx-react';
import logo from '../img/logo.png';

const NavBar = observer(() => (
    <nav>
      <ul className="nav nav-tabs">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="RecipeAppLogo" className="navbar__logo pl-3"/>
        </a>
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