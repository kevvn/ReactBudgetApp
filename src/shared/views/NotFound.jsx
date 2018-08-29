import React from 'react';
import { Link } from 'react-router-dom';

export default (props, context = Object.create({})) => {
  const notFoundContext = context;
  if (notFoundContext.setStatus) {
    notFoundContext.setStatus(404);
  }

  return (
    <div>
      <h1>
Sorry, this page is currently out of stock.
      </h1>
      <Link to="/">
Go Home
      </Link>
    </div>
  );
};
