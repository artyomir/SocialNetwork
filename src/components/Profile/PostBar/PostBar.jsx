import React from 'react';
import profileStyles from './PostBar.module.css';

const PostBar = (props) => {
  const newPost = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onCnhagePostText = () => {
    let text = newPost.current.value;
    props.changePostText(text);
  };

  return (
    <div className={profileStyles.postbar}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPost}
            onChange={onCnhagePostText}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={profileStyles.posts}>{props.postJSXArray}</div>
    </div>
  );
};

export default PostBar;
