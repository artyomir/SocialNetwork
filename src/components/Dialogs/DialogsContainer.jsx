import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  sendMessageActionCreator,
  changeMessageActionCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  debugger;
  const dialogJSXArray = props.store
    .getState()
    .dialogsPage.dialogsData.map((d) => (
      <DialogItem id={d.id} userName={d.userName} />
    ));

  const messagesJSXArray = props.store
    .getState()
    .dialogsPage.messagesData.map((m) => <Message message={m.message} />);

  const messageSend = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const messageTextChange = (text) => {
    props.store.dispatch(changeMessageActionCreator(text));
  };

  return (
    <Dialogs
      messageSend={messageSend}
      messageTextChange={messageTextChange}
      messagesJSXArray={messagesJSXArray}
      dialogJSXArray={dialogJSXArray}
      newMessageText={props.store.getState().dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
