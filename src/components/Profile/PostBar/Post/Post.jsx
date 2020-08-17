import React from 'react';
import postStyles from './Post.module.css';
import { postAvatar } from '../../../../pictures';

const Post = () => {
  return (
    <div className={postStyles.item}>
      <img src={postAvatar} />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
