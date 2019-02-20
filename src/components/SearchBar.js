import React from 'react';
import {observer} from "mobx-react";


const SearchBar = observer(({isLoading, onSearch, query, onChange}) => (
    <div className="input-group my-3 mx-4">
      <input type="text"
             className="form-control"
             aria-label="Type the dish name"
             placeholder="Type the dish name"
             onChange={onChange}
      />
      <div className="input-group-append">
        <button
            disabled={isLoading || query.length === 0}
            onClick={onSearch}
            className="btn btn-outline-primary"
            type="button">
          {isLoading ? (
              <i className = "fa fa-spinner fa-spin fa-fw"/>
          ) : (
              <i className="fa fa-search" aria-hidden="true"/>
          )}
        </button>
      </div>
    </div>
    )
);

SearchBar.defaultProps = {
  isLoading: false,
  onSearch: () => console.log('searching'),
  query: '',
  onChange: () => console.log('changing'),
};

export default SearchBar;
