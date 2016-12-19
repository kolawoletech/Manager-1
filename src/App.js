import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import RouterComponent from './Router';

const config = {
  apiKey: 'AIzaSyBLQzxyCfHSlfa5caT5T8sR6TeLX1Ppd0I',
  authDomain: 'manager-56756.firebaseapp.com',
  databaseURL: 'https://manager-56756.firebaseio.com',
  storageBucket: 'manager-56756.appspot.com',
  messagingSenderId: '322889087413'
};
firebase.initializeApp(config);

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
