import React from 'react';
import empty from '../img/empty.png';

const NoResults = ({title, description}) => (
  <div className="d-flex flex-column mt-4">
    <img src={empty} alt="empty" className="img-responsive align-self-center"/>
    <h4 className="text-center text-muted mt-5">{title}</h4>
    <p className="text-center text-muted">{description}</p>
  </div>
);

export default NoResults;