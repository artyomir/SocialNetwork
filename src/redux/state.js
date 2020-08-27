import { newsAvatar, postAvatar } from '../pictures';

const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';

const store = {
  _state: {
    profilePage: {
      postData: [
        { message: 'Hi! How are u?', likeAmount: '49', postAvatar: postAvatar },
        {
          message: 'get the fuck out from here! hahah',
          likeAmount: '52',
          postAvatar: postAvatar,
        },
        {
          message: 'I AM FRONTEND DEVELOPER',
          likeAmount: '99999+',
          postAvatar: postAvatar,
        },
      ],
      newPostText: '',
    },
    newsPage: {
      newsData: [
        {
          avatar: newsAvatar,
          newsName: 'Ria',
          news: 'Навального отравили, он в тяжелом состоянии',
          likeAmount: 66,
        },
        {
          avatar: newsAvatar,
          newsName: 'Ria',
          news: 'Лукошенко пидор',
          likeAmount: 143,
        },
        {
          avatar: newsAvatar,
          newsName: 'Ria',
          news: 'Скоро 1 сентября',
          likeAmount: 45,
        },
      ],
    },
    dialogsPage: {
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
    },
    sideBar: {},
    musicPage: {},
    settingsPage: {},
    friendsPage: {},
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    if (!this._state.profilePage.newPostText) {
      return;
    }
    const post = {
      message: this._state.profilePage.newPostText,
      likeAmount: '0',
      postAvatar: postAvatar,
    };
    this._state.profilePage.postData.push(post);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this.getState());
  },

  postChange(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber(this.getState());
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      if (!this._state.profilePage.newPostText) {
        return;
      }
      const post = {
        message: this._state.profilePage.newPostText,
        likeAmount: '0',
        postAvatar: postAvatar,
      };
      this._state.profilePage.postData.push(post);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this.getState());
    } else if (action.type === POST_CHANGE) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this.getState());
    }
  },
};

export const changePostTextActionCreator = (text) => {
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

window.store = store;

export default store;
