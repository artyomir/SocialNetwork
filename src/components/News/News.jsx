import React from 'react';
import { newsAvatar, postAvatar } from '../../pictures';
import NewsPost from './NewsPost/NewsPost';
import newsStyles from './News.module.css';

const newsData = [
  {
    avatar: newsAvatar,
    newsName: 'Ria',
    news: 'Навального отравили',
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
];

const newsJSXArray = newsData.map((n) => (
  <NewsPost
    avatar={n.avatar}
    newsName={n.newsName}
    news={n.news}
    likeAmount={n.likeAmount}
  />
));

const News = (props) => {
  return (
    <div className={newsStyles.bar}>
      My news
      {newsJSXArray}
    </div>
  );
};

export default News;
