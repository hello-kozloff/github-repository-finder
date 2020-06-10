import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';

/**
 * App Component
 * @constructor
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route exact path="/" component={FavoritesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
