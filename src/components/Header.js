import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import notebook from '../assets/icons/notebook.svg';
import Hamburger from './Hamburger';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Hamburger
            isMenuOpen={isMenuOpen}
            onIsMenuOpenChange={setIsMenuOpen}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
