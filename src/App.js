import React, { Component } from 'react';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBE7hjMA8DVOfdj5S5YPK_RmaVfmwHrAWI',
      authDomain: 'keep-clone-604f2.firebaseapp.com',
      databaseURL: 'https://keep-clone-604f2.firebaseio.com',
      projectId: 'keep-clone-604f2',
      storageBucket: 'keep-clone-604f2.appspot.com',
      messagingSenderId: '103102107134'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <LoginForm />
    );
  }
}

export default App;
