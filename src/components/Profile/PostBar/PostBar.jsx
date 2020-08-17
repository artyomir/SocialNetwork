import React from 'react';
import profileStyles from './PostBar.module.css';
import Post from './Post/Post';

const PostBar = () => {
  return (
    <div className={profileStyles.postbar}>
      My posts
      <Post></Post>
    </div>
  );
};

export default PostBar;
