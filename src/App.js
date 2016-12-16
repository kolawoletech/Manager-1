import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBLQzxyCfHSlfa5caT5T8sR6TeLX1Ppd0I',
      authDomain: 'manager-56756.firebaseapp.com',
      databaseURL: 'https://manager-56756.firebaseio.com',
      storageBucket: 'manager-56756.appspot.com',
      messagingSenderId: '322889087413'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
