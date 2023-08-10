import React from 'react';

const menuItems = [
  {
    name: 'Table of Contents',
    page: 'table-of-contents',
  },
  {
    name: 'Page One',
    page: 'page-one',
  },
  {
    name: 'Page Two',
    page: 'page-two',
  },
  {
    name: 'Page Three',
    page: 'page-three',
  },
];

const NavMenu = ({ isMenuOpen, navigateToPage, onIsMenuOpenChange }) => {
  return (
    <div className={`navMenu ${isMenuOpen ? 'isDisplayed' : ''}`}>
      <div>
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
