import React from 'react';
import postStyles from './Post.module.css';
import { postAvatar } from '../../../../pictures';

const Post = (props) => {
  debugger;
  return (
    <div className={postStyles.item}>
      <img src={postAvatar} />
      {props.message}
      <div>
        <span>Like</span>
        <span> {props.likeAmount}</span>
      </div>
    </div>
  );
};

export default Post;
