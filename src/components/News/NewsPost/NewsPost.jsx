import React from 'react';
import postStyle from './NewsPost.module.css';

const NewsPost = (props) => {
  return (
    <div className={postStyle.item}>
      <span>
        <img src={props.avatar} />
      </span>
      <span> {props.newsName}</span>
      <div>{props.news}</div>
      <div>
        <span>Likes</span>
        <span> {props.likeAmount}</span>
      </div>
    </div>
  );
};

export default NewsPost;
