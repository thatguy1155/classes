import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import AuthContextProvider from './Context/AuthContext';
import CrudContextProvider from './Context/CRUDContext';
import AppContextProvider from './Context/AppContext';
import './App.css';
import Authentication from './Authentication/Authentication';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <CrudContextProvider>
          <AuthContextProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Authentication} />
              </Switch>
            </Router>
          </AuthContextProvider>
        </CrudContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
