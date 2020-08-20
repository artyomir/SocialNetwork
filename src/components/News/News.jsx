import React from 'react';
import { newsAvatar } from '../../pictures';
import NewsPost from './NewsPost/NewsPost';
import newsStyles from './News.module.css';

const News = (props) => {
  return (
    <div className={newsStyles.bar}>
      My news
      <NewsPost
        avatar={newsAvatar}
        newsName="RIA"
        news="Навального отравили"
        likeAmount={45}
      ></NewsPost>
      <NewsPost
        avatar={newsAvatar}
        newsName="RIA"
        news="Лукашенко пидор"
        likeAmount={45}
      ></NewsPost>
    </div>
  );
};

export default News;
