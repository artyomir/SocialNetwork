import React from 'react';
import navbarStyles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import BestFriends from './BestFriends/BestFriends';

const Navbar = () => {
  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.item}>
        <NavLink to="/profile" activeClassName={navbarStyles.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${navbarStyles.item} navbarStyles.active}`}>
        <NavLink to="/messages" activeClassName={navbarStyles.active}>
          Messages
        </NavLink>
      </div>
      <div className={navbarStyles.item}>
        <NavLink to="/news" activeClassName={navbarStyles.active}>
          News
        </NavLink>
      </div>
      <div className={navbarStyles.item}>
        <NavLink to="/music" activeClassName={navbarStyles.active}>
          Music
        </NavLink>
      </div>
      <div className={navbarStyles.bestFriends}>
        <BestFriends />
      </div>
    </nav>
  );
};

export default Navbar;
