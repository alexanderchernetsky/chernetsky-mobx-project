import React from 'react';
import {observer} from "mobx-react";


const SearchBar = observer(({searchPageStore}) => (
    <div className="input-group my-3 mx-4">
      <input type="text"
             className="form-control"
             aria-label="Type the dish name"
             placeholder="Type the dish name"
             onChange={(e) => searchPageStore.setSearchQuery(e.target.value)}
      />
      <div className="input-group-append">
        <button
            disabled={searchPageStore.isLoading || searchPageStore.search.length === 0}
            onClick={searchPageStore.loadImages}
            className="btn btn-outline-primary"
            type="button"
        >
          {searchPageStore.isLoading ? (
              <div><i className="fas fa-spinner fa-spin"/></div>
          ) : (
              <span><i className="fa fa-search" aria-hidden="true" /></span>
          )}
          {/*use span and div as wrappers to make icons switching work*/}
        </button>
      </div>
    </div>
    )
);



export default SearchBar;
