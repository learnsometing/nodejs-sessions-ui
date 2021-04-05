import React, { ReactNode } from 'react';

// React Router Dom
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function Routes(): ReactNode {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <h1>Hello World</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
