import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>
          <span aria-hidden="true" role="img">
            🎮
          </span>
          NorthGamers
          <span aria-hidden="true" role="img">
            👾
          </span>
        </h1>
      </Link>
      <h2>The best games there ever were!</h2>
    </header>
  );
};

export default Header;
