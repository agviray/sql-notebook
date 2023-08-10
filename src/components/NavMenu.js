import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({ isMenuOpen }) => {
  return (
    <div className={`navMenu ${isMenuOpen ? 'isDisplayed' : ''}`}>
      <ul>
        <li>
          <Link to="table-of-contents">
            <span>Table of Contents</span>
          </Link>
        </li>
        <li>
          <Link to="page-one">
            <span>Page One</span>
          </Link>
        </li>
        <li>
          <Link to="page-two">
            <span>Page Two</span>
          </Link>
        </li>
        <li>
          <Link to="page-three">
            <span>Page Three</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
