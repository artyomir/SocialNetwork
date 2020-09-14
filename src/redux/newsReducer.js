import { newsAvatar } from '../pictures';

const localState = {
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
};

const newsReducer = (state = localState, action) => {
  return state;
};

export default newsReducer;
