import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
  const config = {
   apiKey: 'AIzaSyByQRsZVmucfGs-GzGS7Wokic0RF8y-tos',
   authDomain: 'manager-a993b.firebaseapp.com',
   databaseURL: 'https://manager-a993b.firebaseio.com',
   projectId: 'manager-a993b',
   storageBucket: 'manager-a993b.appspot.com',
   messagingSenderId: '907391193708'
 };
 firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
    <Router />
      </Provider>
    );
  }
}

export default App;
