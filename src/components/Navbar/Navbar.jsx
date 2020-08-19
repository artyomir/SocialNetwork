import React from 'react';
import navbarStyles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${navbarStyles.item} navbarStyles.active}`}>
        <a href="/messages">Messages</a>
      </div>
      <div className={navbarStyles.item}>
        <a href="/news">News</a>
      </div>
      <div className={navbarStyles.item}>
        <a href="music">Music</a>
      </div>
    </nav>
  );
};

export default Navbar;
