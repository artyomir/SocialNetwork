import React from 'react';
import profileStyles from './PostBar.module.css';
import Post from './Post/Post';

const PostBar = () => {
  return (
    <div className={profileStyles.postbar}>
      My posts
      <Post likeAmount={19} message="Hi! How are u?"></Post>
      <Post message="Get the fuck out from here!" likeAmount="666"></Post>
    </div>
  );
};

export default PostBar;
