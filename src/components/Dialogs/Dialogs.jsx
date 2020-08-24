import React from 'react';
import dialogStyles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogJSXArray = props.state.dialogsData.map((d) => (
    <DialogItem id={d.id} userName={d.userName} />
  ));

  const messagesJSXArray = props.state.messagesData.map((m) => (
    <Message message={m.message} />
  ));
  // const dialogJSXArray = props.dialogsData.map((d) => (
  //   <DialogItem id={d.id} userName={d.userName} />
  // ));

  // const messagesJSXArray = props.messagesData.map((m) => (
  //   <Message message={m.message} />
  // ));

  return (
    <div className={dialogStyles.dialogsMain}>
      <div className={dialogStyles.dialogs}>{dialogJSXArray}</div>
      <div className={dialogStyles.corresp}>{messagesJSXArray}</div>
    </div>
  );
};

export default Dialogs;
