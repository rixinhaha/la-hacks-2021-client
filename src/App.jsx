import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
