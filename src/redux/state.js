import { newsAvatar, postAvatar } from '../pictures';
import renderEntireTree from '../render';

export const addPost = () => {
  if (!state.profilePage.newPostText) {
    return;
  }
  const post = {
    message: state.profilePage.newPostText,
    likeAmount: '0',
    postAvatar: postAvatar,
  };
  state.profilePage.postData.push(post);
  state.profilePage.newPostText = '';
  renderEntireTree(state, addPost, postChange);
};

export const postChange = (text) => {
  state.profilePage.newPostText = text;
  renderEntireTree(state, addPost, postChange);
};

const state = {
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
};

export default state;
