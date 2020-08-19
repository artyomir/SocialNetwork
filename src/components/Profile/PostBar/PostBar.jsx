import React from 'react';
import profileStyles from './PostBar.module.css';
import Post from './Post/Post';

const PostBar = () => {
  return (
    <div className={profileStyles.postbar}>
      My posts
      <Post message="Hi! How are u?"></Post>
    </div>
  );
};

export default PostBar;
