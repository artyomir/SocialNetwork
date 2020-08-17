import React from 'react';
import { logoWeed } from '../../pictures';
import headerStyles from './Header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <img src={logoWeed} />
    </header>
  );
};

export default Header;
