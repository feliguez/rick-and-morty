import React from 'react';

import Title from '../title/Title';

import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container heroes heroes--container">
        <Title>Rick and Morty</Title>
      </div>
    </header>
  );
};

export default Header;
