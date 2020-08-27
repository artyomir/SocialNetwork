import React from 'react';
import dialogStyles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  sendMessageActionCreator,
  changeMessageActionCreator,
} from '../../redux/dialogsReducer';

const Dialogs = (props) => {
  const dialogJSXArray = props.state.dialogsData.map((d) => (
    <DialogItem id={d.id} userName={d.userName} />
  ));

  const messagesJSXArray = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  const onMessageSendClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const messageTextChange = (e) => {
    const text = e.target.value;
    props.dispatch(changeMessageActionCreator(text));
  };

  return (
    <div className={dialogStyles.dialogsMain}>
      <div className={dialogStyles.dialogs}>{dialogJSXArray}</div>
      <div className={dialogStyles.corresp}>
        <div>{messagesJSXArray}</div>
        <div>
          <textarea
            onChange={messageTextChange}
            value={props.state.newMessageText}
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
