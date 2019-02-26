// import libraries
import React, { Component } from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'mobx-react';
import DevTools from "mobx-react-devtools";
// import components
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
// import pages
import DetailsPage from './pages/DetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';
//import stores
import SearchPageStore from './stores/SearchPageStore';
import DetailsPageStore from './stores/DetailsPageStore';
import FavoritesPageStore from './stores/FavoritesPageStore';
// create instances of stores
const searchPageStore = new SearchPageStore();
const detailsPageStore = new DetailsPageStore();
const favoritesPageStore = new FavoritesPageStore();

class App extends Component {
  render() {
    return (
        <Provider searchPageStore={searchPageStore} detailsPageStore={detailsPageStore} favoritesPageStore={favoritesPageStore}>
          <HashRouter>
            <div>
              <DevTools/>
              <NavBar/>
              <Switch>
                <Route exact path='/' component={SearchPage}/>
                <Route path='/search' component={SearchPage}/>
                <Route path='/details/:recipeId' component={DetailsPage}/>
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
