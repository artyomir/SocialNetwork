import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';

// const renderDialog = (props) => {
//   return <Dialogs dialogsData={props.dialogsData} />;
// };

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/messages"
          render={() => (
            <Dialogs
              state={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/news"
          render={() => <News state={props.state.newsPage} />}
        />
      </div>
    </div>
  );
};

export default App;
