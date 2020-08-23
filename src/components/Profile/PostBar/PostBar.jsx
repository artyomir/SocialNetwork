import React from 'react';
import profileStyles from './PostBar.module.css';
import Post from './Post/Post';

const postData = [
  { message: 'Hi! How are u?', likeAmount: '49' },
  { message: 'get the fuck out from here! hahah', likeAmount: '52' },
];

const postJSXArray = postData.map((p) => (
  <Post likeAmount={p.likeAmount} message={p.message} />
));

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
      <div className={profileStyles.posts}>{postJSXArray}</div>
    </div>
  );
};

export default PostBar;
