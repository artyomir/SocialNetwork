import React from 'react';
import Post from './Post/Post';
import {
  changePostTextActionCreator,
  addPostActionCreator,
} from '../../../redux/profileReducer';
import PostBar from './PostBar';

const PostBarContainer = (props) => {
  const postJSXArray = props.store
    .getState()
    .profilePage.postData.map((p) => (
      <Post
        likeAmount={p.likeAmount}
        message={p.message}
        postAvatar={p.postAvatar}
      />
    ));

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const cnhagePostText = (text) => {
    props.store.dispatch(changePostTextActionCreator(text));
  };

  return (
    <PostBar
      changePostText={cnhagePostText}
      addPost={addPost}
      postJSXArray={postJSXArray}
    />
  );
};

export default PostBarContainer;
