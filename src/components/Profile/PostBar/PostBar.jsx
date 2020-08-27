import React from 'react';
import profileStyles from './PostBar.module.css';
import Post from './Post/Post';
import {
  changePostTextActionCreator,
  addPostActionCreator,
} from '../../../redux/profileReducer';

const PostBar = (props) => {
  const postJSXArray = props.postData.map((p) => (
    <Post
      likeAmount={p.likeAmount}
      message={p.message}
      postAvatar={p.postAvatar}
    />
  ));

  const newPost = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const cnhagePostText = () => {
    let text = newPost.current.value;
    props.dispatch(changePostTextActionCreator(text));
  };

  return (
    <div className={profileStyles.postbar}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPost}
            onChange={cnhagePostText}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={profileStyles.posts}>{postJSXArray}</div>
    </div>
  );
};

export default PostBar;
