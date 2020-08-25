import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import state, { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const renderEntireTree = (state, addPost, postChange) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} postChange={postChange} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

export default renderEntireTree;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
