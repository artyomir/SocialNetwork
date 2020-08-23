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

const messages = [
  { message: 'Hello' },
  { message: 'How are u?' },
  { message: 'go smoking WEEEEEED))))' },
  { message: 'hahahahhahahaha' },
];

const dialogs = [
  { userName: 'Ashot', id: '1' },
  { userName: 'Buktop', id: '2' },
  { userName: 'Luk', id: '3' },
];
const Dialogs = (props) => {
  return (
    <div className={dialogStyles.dialogsMain}>
      <div className={dialogStyles.dialogs}>
        <DialogItem id={dialogs[0].id} userName={dialogs[0].userName} />
        <DialogItem id={dialogs[1].id} userName={dialogs[1].userName} />
        <DialogItem id={dialogs[2].id} userName={dialogs[2].userName} />
      </div>
      <div className={dialogStyles.corresp}>
        <Message message={messages[0].message} />
        <Message message={messages[1].message} />
        <Message message={messages[2].message} />
        <Message message={messages[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
