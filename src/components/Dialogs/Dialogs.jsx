import React from 'react';
import dialogStyles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

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

const Message = (props) => {
  return <div className={dialogStyles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={dialogStyles.dialogsMain}>
      <div className={dialogStyles.dialogs}>
        <DialogItem id="1" userName="Ashot" />
        <DialogItem id="2" userName="Buktop" />
        <DialogItem id="3" userName="Luk" />
      </div>
      <div className={dialogStyles.corresp}>
        <Message message="Hello!" />
        <Message message="ho are u?" />
        <Message message="go smoking WEEEEEED))))" />
      </div>
    </div>
  );
};

export default Dialogs;
