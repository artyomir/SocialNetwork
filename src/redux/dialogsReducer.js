const MESSAGE_CHANGE = 'MESSAGE-CHANGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const localState = {
  dialogsData: [
    { userName: 'Ashot', id: '1' },
    { userName: 'Buktop', id: '2' },
    { userName: 'Luk', id: '3' },
    { userName: 'Vanina', id: '4' },
  ],

  messagesData: [
    { message: 'Hello' },
    { message: 'How are u?' },
    { message: 'go smoking WEEEEEED mafaka))))' },
    { message: 'hahahahahh' },
  ],

  newMessageText: '',
};

const dialogsReducer = (state = localState, action) => {
  switch (action.type) {
    case MESSAGE_CHANGE:
      state.newMessageText = action.text;
      return state;
    case SEND_MESSAGE:
      if (!state.newMessageText) {
        return state;
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
