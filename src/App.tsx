import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';

/**
 * App Component
 * @constructor
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
