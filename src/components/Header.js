import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import notebook from '../assets/icons/notebook.svg';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
    }
    navigate(path);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="content">
            <div
              onClick={() => navigateToPage('/')}
              className="headerLinkContainer"
            >
              <span>
                <h1>SQL Notebook</h1>
                <span>
                  <img src={notebook} alt="SQL Notebook logo" />
                </span>
              </span>
            </div>
            <Hamburger
              isMenuOpen={isMenuOpen}
              onIsMenuOpenChange={setIsMenuOpen}
            />
          </div>
        </nav>
      </header>
      <NavMenu
        isMenuOpen={isMenuOpen}
        navigateToPage={navigateToPage}
        onIsMenuOpenChange={setIsMenuOpen}
      />
    </div>
  );
};

export default Header;
