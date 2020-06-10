import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import SearchPage from './pages/SearchPage';

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
