import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogStyles from '../Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/messages/';

  return (
    <div className={dialogStyles.item}>
      <NavLink to={path + props.id} activeClassName={dialogStyles.active}>
        {props.userName}
      </NavLink>
    </div>
  );
};

export default DialogItem;
