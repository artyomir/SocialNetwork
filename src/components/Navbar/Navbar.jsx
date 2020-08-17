import React from 'react';
import navbarStyles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.item}>
        <a>Profile</a>
      </div>
      <div className={`${navbarStyles.item} navbarStyles.active}`}>
        <a>Messages</a>
      </div>
      <div className={navbarStyles.item}>
        <a>News</a>
      </div>
      <div className={navbarStyles.item}>
        <a>Music</a>
      </div>
    </nav>
  );
};

export default Navbar;
