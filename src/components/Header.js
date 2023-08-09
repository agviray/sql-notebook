import React from 'react';
import { Link } from 'react-router-dom';
import notebook from '../assets/icons/notebook.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="content">
          <div className="headerLinkContainer">
            <Link to={'/'}>
              <span>
                <h1>SQL Notebook</h1>
                <span>
                  <img src={notebook} alt="SQL Notebook logo" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
