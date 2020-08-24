import React from 'react';
// import { newsAvatar, postAvatar } from '../../pictures';
import NewsPost from './NewsPost/NewsPost';
import newsStyles from './News.module.css';

const News = (props) => {
  const newsJSXArray = props.state.newsData.map((n) => (
    <NewsPost
      avatar={n.avatar}
      newsName={n.newsName}
      news={n.news}
      likeAmount={n.likeAmount}
    />
  ));

  return (
    <div className={newsStyles.bar}>
      My news
      {newsJSXArray}
    </div>
  );
};

export default News;
