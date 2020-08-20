import React from 'react';
import profileStyles from './PostBar.module.css';
import Post from './Post/Post';

const PostBar = () => {
  return (
    <div className={profileStyles.postbar}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={profileStyles.posts}>
        <Post likeAmount={19} message="Hi! How are u?"></Post>
        <Post message="Get the fuck out from here!" likeAmount="666"></Post>
      </div>
    </div>
  );
};

export default PostBar;
