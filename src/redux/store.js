import newsReducer from './newsReducer';

const { createStore, combineReducers } = require('redux');
const { default: profileReducer } = require('./profileReducer');
const { default: dialogsReducer } = require('./dialogsReducer');

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  newsPage: newsReducer,
});

const store = createStore(reducers);

export default store;
