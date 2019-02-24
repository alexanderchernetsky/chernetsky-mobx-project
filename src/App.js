import React, { Component } from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'mobx-react';
import DevTools from "mobx-react-devtools";

import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

import DetailsPage from './pages/DetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';

import SearchPageStore from './stores/SearchPageStore';

const searchPageStore = new SearchPageStore();


class App extends Component {
  render() {
    return (
        <Provider searchPageStore={searchPageStore}>
          <HashRouter>
            <div>
              <DevTools/>
              <NavBar/>
              <Switch>
                <Route exact path='/' component={SearchPage}/>
                <Route path='/search' component={SearchPage}/>
                <Route path='/details/:id' component={DetailsPage}/>
                <Route path='/favorites' component={FavoritesPage}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </HashRouter>
        </Provider>
    );
  }
}

export default App;
