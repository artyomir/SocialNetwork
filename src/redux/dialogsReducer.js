const MESSAGE_CHANGE = 'MESSAGE-CHANGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case MESSAGE_CHANGE:
      state.newMessageText = action.text;
      return state;
    case SEND_MESSAGE:
      if (!state.newMessageText) {
        return;
      }
      const newMessage = { message: state.newMessageText };
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const changeMessageActionCreator = (text) => {
  return {
    type: MESSAGE_CHANGE,
    text: text,
  };
};

export default dialogsReducer;
