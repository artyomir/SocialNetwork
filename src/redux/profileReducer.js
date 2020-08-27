import { postAvatar } from '../pictures';

const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';

const profileReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case ADD_POST:
      if (!state.newPostText) {
        return state;
      }
      const post = {
        message: state.newPostText,
        likeAmount: '0',
        postAvatar: postAvatar,
      };
      state.postData.push(post);
      state.newPostText = '';
      return state;
    case POST_CHANGE:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export const changePostTextActionCreator = (text) => {
  debugger;
  return {
    type: POST_CHANGE,
    text: text,
  };
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export default profileReducer;
