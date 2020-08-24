import React from 'react';
import profileStyles from './PostBar.module.css';
import Post from './Post/Post';

const PostBar = (props) => {
  const postJSXArray = props.postData.map((p) => (
    <Post
      likeAmount={p.likeAmount}
      message={p.message}
      postAvatar={p.postAvatar}
    />
  ));

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
