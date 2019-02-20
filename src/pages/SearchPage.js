import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';

class SearchPage extends Component{
  render() {
    return (
        <div className="container">
          <SearchBar/>
          Search Page
        </div>
    )
  }
}
export default SearchPage;