import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import AppContextProvider from './Context/Context';
import './App.css';
import SearchPage from './SearchPage/SearchPage';
import GraphPage from './GraphPage/GraphPage';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/results" component={GraphPage} />
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
