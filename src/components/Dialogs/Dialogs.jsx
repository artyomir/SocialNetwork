import React from 'react';
import dialogStyles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const onMessageSendClick = () => {
    props.messageSend();
  };

  const onMessageTextChange = (e) => {
    const text = e.target.value;
    props.messageTextChange(text);
  };

  return (
    <div className={dialogStyles.dialogsMain}>
      <div className={dialogStyles.dialogs}>{props.dialogJSXArray}</div>
      <div className={dialogStyles.corresp}>
        <div>{props.messagesJSXArray}</div>
        <div>
          <textarea
            onChange={onMessageTextChange}
            value={props.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={onMessageSendClick}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
