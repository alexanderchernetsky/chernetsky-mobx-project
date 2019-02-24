import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import SearchBar from '../components/SearchBar';
import NoResults from '../components/NoResults';
import Recipes from '../components/Recipes';


@inject('searchPageStore')
@observer
class SearchPage extends Component{
  render() {
    return (
        <div className="container">
          <SearchBar searchPageStore={this.props.searchPageStore}/>
          {this.props.searchPageStore.recipes.length && <Recipes recipes={this.props.searchPageStore.recipes}/> || <NoResults/>}
        </div>
    )
  }
}
export default SearchPage;