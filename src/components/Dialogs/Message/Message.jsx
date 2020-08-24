import React from 'react';
import dialogStyles from '../Dialogs.module.css';

const Message = (props) => {
  return <div className={dialogStyles.message}>{props.message}</div>;
};

export default Message;
