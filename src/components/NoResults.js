import React from 'react';
import empty from '../img/empty.png';

const NoResults = () => (
  <div className="d-flex flex-column">
    <img src={empty} alt="empty" className="img-responsive align-self-center"/>
    <h4 className="text-center text-muted mt-5">No results found.</h4>
    <p className="text-center text-muted">Perform a new search using the search bar.</p>
  </div>
);

export default NoResults;