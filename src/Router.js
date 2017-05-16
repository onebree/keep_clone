import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.noteForm()}
          rightTitle="Add"
          key="notesList"
          component={NotesList}
          title="Notes"
          initial
        />
        <Scene
          key="noteForm"
          component={NoteForm}
          title="Note"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
