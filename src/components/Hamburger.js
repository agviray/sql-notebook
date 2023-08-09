import React from 'react';

const Hamburger = ({ isMenuOpen, onIsMenuOpenChange }) => {
  return (
    <div
      onClick={() => onIsMenuOpenChange(!isMenuOpen)}
      className={`hamburger ${isMenuOpen ? 'toggledOpen' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
