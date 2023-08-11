import React from 'react';

const menuItems = [
  {
    name: 'Home',
    page: '/',
  },
  {
    name: 'About',
    page: 'about',
  },
  {
    name: 'Table of Contents',
    page: 'table-of-contents',
  },
];

const NavMenu = ({ isMenuOpen, navigateToPage }) => {
  return (
    <div className={`navMenuMobile ${isMenuOpen ? 'isDisplayed' : ''}`}>
      <div className="menuListContainer">
        <ul>
          {menuItems.map(({ name, page }, index) => (
            <li key={index} onClick={(e) => navigateToPage(page)}>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
