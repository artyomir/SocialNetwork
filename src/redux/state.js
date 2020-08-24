import { newsAvatar, postAvatar } from '../pictures';

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
