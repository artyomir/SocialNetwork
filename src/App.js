import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';

// const renderDialog = (props) => {
//   return <Dialogs dialogsData={props.dialogsData} />;
// };

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/messages"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route
            path="/news"
            render={() => <News state={props.state.newsPage} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
