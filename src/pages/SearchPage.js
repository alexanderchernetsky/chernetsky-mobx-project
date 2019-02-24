import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import SearchBar from '../components/SearchBar';
import NoResults from '../components/NoResults';

@inject('searchPageStore')
@observer
class SearchPage extends Component{
  render() {
    return (
        <div className="container">
          <SearchBar searchPageStore={this.props.searchPageStore}/>
          <NoResults/>
        </div>
    )
  }
}
export default SearchPage;