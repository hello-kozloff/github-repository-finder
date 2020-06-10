import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import SearchPage from './pages/SearchPage';

/**
 * App Component
 * @constructor
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
